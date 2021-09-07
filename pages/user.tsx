import React from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

export default function User() {
  return <></>;
}

User.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
