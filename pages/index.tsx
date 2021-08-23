import { ButtonBase } from "@material-ui/core";
import firebase from "firebase";
import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout/AuthenticatedLayout";

export default function Dashboard() {
  return (
    <ButtonBase onClick={() => firebase.auth().signOut()}>Dashboard</ButtonBase>
  );
}

Dashboard.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
