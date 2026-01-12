import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';

// export const dynamic = 'force-static'; // This page always renders on the server as static
// export const revalidate = 30;

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(new Date().getTime());

  return (
    <main className='min-h-[600px] text-4xl font-bold'>
      <div>
        Hora: {hour} | ID: {id}
      </div>

      <form action={revalidateExampleAction}>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />
        <button
          type='submit'
          className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 cursor-pointer'
        >
          Revalidate Example Action
        </button>
      </form>
    </main>
  );
}
