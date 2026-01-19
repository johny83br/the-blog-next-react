import { ManagePostForm } from '@/components/Admin/ManagePostForm';
import { Subtitle } from '@/components/Layouts/Subtitle';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Editar Post | Admin',
};

type AdminPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({ params }: AdminPostPageProps) {
  const { id } = await params;

  return (
    <>
      <Subtitle>Editar Post</Subtitle>
      <ManagePostForm />
    </>
  );
}
