'use client';

import { Button } from '@/components/Forms/Button';
import { InputCheckbox } from '@/components/Forms/InputCheckbox';
import { InputText } from '@/components/Forms/InputText';
import { MarkdownEditor } from '@/components/Forms/MarkdownEditor';
import { ImageUploader } from '../../Forms/ImageUploader';
import React from 'react';

export const dynamic = 'force-dynamic';

export function ManagePostForm() {
  const [content, setContent] = React.useState('');

  return (
    <form method='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Título' placeholder='Digite o título do post' />

        <ImageUploader />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={content}
          setValue={setContent}
        />

        <InputCheckbox labelText='Aceito os termos e condições' />

        <div className='mt-8'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
