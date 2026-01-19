import { ManagePostForm } from '@/components/Admin/ManagePostForm';
import { Subtitle } from '@/components/Layouts/Subtitle';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <Subtitle>Criar post</Subtitle>
      <ManagePostForm />
    </>
  );
}
