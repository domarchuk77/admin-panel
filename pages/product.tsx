import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout/AuthenticatedLayout";

export default function Product() {
  return <div style={{ height: "2000px" }}>Product</div>;
}

Product.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
