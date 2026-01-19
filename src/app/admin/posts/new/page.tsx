import { InputCheckbox } from '@/components/Forms/InputCheckbox';
import { InputText } from '@/components/Forms/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6 mb-8'>
      <InputText labelText='Nome' placeholder='Digite seu nome' />
      <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />

      <InputCheckbox labelText='Aceito os termos e condições' />

      <InputText
        disabled
        labelText='Sobrenome'
        placeholder='Digite seu sobrenome'
      />
      <InputText
        disabled
        value='Olá mundo!'
        labelText='Sobrenome'
        placeholder='Digite seu sobrenome'
      />
      <InputText
        readOnly
        labelText='Sobrenome'
        placeholder='Digite seu sobrenome'
      />
      <InputText
        readOnly
        value='Olá mundo!'
        labelText='Sobrenome'
        placeholder='Digite seu sobrenome'
      />
    </div>
  );
}
