'use client';

import { ImageUpIcon } from 'lucide-react';
import { Button } from '../Button';
import { useRef } from 'react';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFiles() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  return (
    <div className='flex flex-col gap-3'>
      <Button
        type='button'
        className='self-start'
        variant='ghost'
        onClick={handleChooseFiles}
      >
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
      />
    </div>
  );
}
