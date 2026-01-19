import PostsListAdmin from '@/components/Admin/PostsList';
import { Subtitle } from '@/components/Layouts/Subtitle';
import { SpinLoader } from '@/components/Others/SpinLoader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <>
      <Subtitle>Posts</Subtitle>
      <Suspense fallback={<SpinLoader className='mb-16' />}>
        <PostsListAdmin />
      </Suspense>
    </>
  );
}
