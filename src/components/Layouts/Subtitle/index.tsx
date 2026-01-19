import clsx from 'clsx';

type SubtitleProps = {
  children: React.ReactNode;
};

export function Subtitle({ children }: SubtitleProps) {
  return (
    <h1
      className={clsx(
        'text-2xl/normal font-extrabold pb-3',
        'sm:text-3xl/normal sm:pb-3',
        'md:text-4xl/normal md:pb-3',
        'lg:text-4xl/normal lg:pb-3',
      )}
    >
      {children}
    </h1>
  );
}
