import z, { ZodError } from 'zod';

export function getZodErrorMessages<T>(error: ZodError<T>): string[] {
  const flattened = z.flattenError(error);

  // Extract all messages from fieldErrors and flatten into a single array
  const allErrorMessages = Object.values(flattened.fieldErrors).flat();

  // Add any top-level form errors (if applicable)
  const allMessagesIncludingFormErrors = [
    ...allErrorMessages,
    ...flattened.formErrors,
  ];

  return JSON.parse(JSON.stringify(allMessagesIncludingFormErrors));
}
