import React, { useEffect } from "react";
import firebase from "firebase";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/core/Alert";
import { AlertColor } from "@material-ui/core/Alert";
import CloseIcon from "@material-ui/icons/Close";
import LoadingPage from "../LoadingPage";
import { IconButton } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const Context = React.createContext<ContextProps>({} as ContextProps);
interface ContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
  signIn: () => void;
  signOut: any;
  user?: User | null;
}

interface AlertProps {
  show: boolean;
  severity: AlertColor;
  message: string;
}
interface User {
  displayName: string | null;
  photoURL: string | null;
}

const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);
  const [alert, setAlert] = React.useState<AlertProps>({
    show: false,
    severity: "error",
    message: "",
  });

  useEffect(() => {
    // firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user:", user);
      if (user) {
        setUser({ displayName: user.displayName, photoURL: user.photoURL });
      } else setUser(null);
    });
  }, []);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword("error@gmail.com", "error@gmail.com")
  //   .then((userCredential) => {
  //     // Signed in
  //     console.log("userCredential:", userCredential);
  //     // ...
  //   })
  //   .catch((error) => {
  //     console.log("error:", error);
  //   });
  // firebase.auth().currentUser?.updateProfile({
  //   displayName: "Jane Q. User",
  //   photoURL: "https://example.com/jane-q-user/profile.jpg",
  // });

  const signOut = () => {
    firebase.auth().signOut();
  };
  if (user === undefined) return <LoadingPage />;
  return (
    <Context.Provider value={{ setAlert, signOut, user, signIn }}>
      {children}
      <Snackbar
        open={alert.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, show: false })}
      >
        <MuiAlert
          variant="filled"
          severity={alert.severity}
          action={
            <IconButton
              color="inherit"
              size="small"
              sx={{ mt: -0.25 }}
              onClick={() => {
                setAlert({ ...alert, show: false });
              }}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </Context.Provider>
  );
};

export default ContextProvider;
