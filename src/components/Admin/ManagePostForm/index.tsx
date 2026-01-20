'use client';

import { Button } from '@/components/Forms/Button';
import { InputCheckbox } from '@/components/Forms/InputCheckbox';
import { InputText } from '@/components/Forms/InputText';
import { MarkdownEditor } from '@/components/Forms/MarkdownEditor';
import { ImageUploader } from '../../Forms/ImageUploader';
import { useActionState, useEffect, useState } from 'react';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { CreatePostAction } from '@/actions/post/create-post-action';
import { toast } from 'react-toastify';

export const dynamic = 'force-dynamic';

type ManagePostFormProps = {
  publicPost: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    CreatePostAction,
    initialState,
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [content, setContent] = useState(publicPost?.content || '');

  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={formState.id}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerada automaticamente'
          type='text'
          defaultValue={formState.slug}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digite o nome do autor'
          type='text'
          defaultValue={formState.author}
        />

        <InputText
          labelText='Título'
          name='title'
          placeholder='Digite o título'
          type='text'
          defaultValue={formState.title}
        />

        <InputText
          labelText='Resumo'
          name='excerpt'
          placeholder='Digite o resumo'
          type='text'
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={content}
          setValue={setContent}
        />

        <ImageUploader />

        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          placeholder='Digite a url da imagem'
          type='text'
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          labelText='Publicar?'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
        />

        <div className='mt-8'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
