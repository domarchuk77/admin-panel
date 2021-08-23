import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout/AuthenticatedLayout";

export default function User() {
  return <div>User</div>;
}

User.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
