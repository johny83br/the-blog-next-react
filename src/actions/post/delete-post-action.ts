'use server';

import { postRepository } from '@/repositories/post';
import { formatHour } from '@/utils/format-datetime';
import { logColor } from '@/utils/log-color';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function DeletePostAction(id: string) {
  if (!id || typeof id !== 'string') {
    throw new Error('ID do post inválido.');
  }

  //TODO: Checar login do usuário

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    throw new Error('Post não encontrado ou já foi deletado.');
  }

  await postRepository.deleteById(id);

  // TODO: revalidateTag ou revalidatePath se necessário
  revalidateTag('posts', 'seconds');
  revalidateTag(`post-${post.slug}`, 'seconds');
  revalidatePath('/admin/posts');

  logColor(formatHour(Date.now()), `Post com ID ${id} deletado.`);

  return id;
}
