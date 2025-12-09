import { PostCoverImage } from '../PostCoverImage';
import { PostInfo } from '../PostInfo';

export function PostFeatured() {
  const slug = 'alguma-coisa';
  const link = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: link }}
        imageProps={{
          width: 1200,
          height: 768,
          src: '/images/bryen_0.png',
          alt: 'Post da notícia',
          priority: true,
        }}
      />
      <PostInfo
        dateTime='2025-08-30'
        time='30/08/2025 10:00'
        url={link}
        title='Lorem ipsum, dolor sit amet consectetur adipisicing elit'
        as='h1'
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        consequatur assumenda quisquam quas minima natus nulla, laborum
        perferendis enim sunt commodi fuga, nemo minus animi doloribus
        voluptates, molestias sequi cum!
      </PostInfo>
    </section>
  );
}
