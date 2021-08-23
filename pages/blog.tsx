import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout/AuthenticatedLayout";

export default function Blog() {
  return <div>Blog</div>;
}

Blog.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
