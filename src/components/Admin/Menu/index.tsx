import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg mb-8',
    'flex flex-col',
    'sm:flex-row sm:flex-wrap',
    // 'h-10',
    'overflow-hidden',
  );
  const linkClasses = clsx(
    '[&>svg]:w-4 [&>svg]:h-4 px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-800',
    'h-10',
    'shrink-0',
  );

  return (
    <nav className={navClasses}>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href='/admin/posts'>
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
