import { SinglePost } from '@/components/Layouts/SinglePost';
import { SpinLoader } from '@/components/Others/SpinLoader';
import { findPublicPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/* Para exportar para HTML, descomentar as linhas debaixo:  */
// export async function generateStaticParams() {
//   const posts = await findAllPublicPostsCached();

//   return posts.map(post => {
//     return {
//       slug: post.slug,
//     };
//   });
// }

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
