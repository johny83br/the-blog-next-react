import { PostFeatured } from '@/components/Posts/PostFeatured';
import { PostsList } from '@/components/Posts/PostsList';
import { SpinLoader } from '@/components/Others/SpinLoader';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
