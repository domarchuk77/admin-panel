import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import firebase from "firebase";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/core/Alert";
import { AlertColor } from "@material-ui/core/Alert";
import CloseIcon from "@material-ui/icons/Close";
import LoadingPage from "../LoadingPage";
import { IconButton } from "@material-ui/core";

export const Context = createContext<ContextProps>({} as ContextProps);

interface ContextProps {
  setAlert: Dispatch<SetStateAction<AlertProps>>;
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

const ContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: "error",
    message: "",
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({ displayName: user.displayName, photoURL: user.photoURL });
      } else setUser(null);
    });
  }, []);

  if (user === undefined) return <LoadingPage />;
  return (
    <Context.Provider value={{ setAlert, user }}>
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
