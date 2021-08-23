import Snackbar from "@material-ui/core/Snackbar";
import React, { createContext, useState } from "react";
import MuiAlert from "@material-ui/core/Alert";
import { AlertColor } from "@material-ui/core/Alert";
import { useEffect } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";

export const Context = createContext<ContextProps>({} as ContextProps);

interface ContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
  login: () => void;
}

interface AlertProps {
  show: boolean;
  severity: AlertColor;
  message: string;
}

interface User {
  avatar?: string | null;
  fullName?: string | null;
}
const firebaseConfig = {
  apiKey: "AIzaSyC6uZ6mD3qiXykSjDZwlcAtU_iPKwTQZq4",
  authDomain: "social-network-32841.firebaseapp.com",
  projectId: "social-network-32841",
  storageBucket: "social-network-32841.appspot.com",
  messagingSenderId: "89759638462",
  appId: "1:89759638462:web:e30d8a3c278ca7f173cfef",
  measurementId: "G-99TVNM44JQ",
};

export const ContextProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: "error",
    message: "",
  });
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.auth().onAuthStateChanged((user) => {
      setUser({ avatar: user?.photoURL, fullName: user?.displayName });
    });
  }, []);
  useEffect(() => {
    const bool = async () => {
      const a = "a";
      console.log("A:", a);
    };
    bool();
    console.log(user, firebase.auth());
  }, [user]);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
  };
  useEffect(() => {
    router.push("/register");
  }, []);
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <Context.Provider value={{ setAlert, login }}>
      {children}
      <Snackbar
        open={alert.show}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, show: false })}
      >
        <MuiAlert variant="filled" severity={alert.severity}>
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </Context.Provider>
  );
};
