import { useContext, useState } from "react";
import firebase from "firebase";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import BasicLink from "next/link";
import Head from "next/head";

import { Context } from "../components/Unknown/Context";
import AuthLayout from "../components/Unknown/AuthLayout";

import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { LoadingButton } from "@material-ui/lab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { styled } from "@material-ui/styles";

import LeavingGirlIcon from "../assets/icons/LeavingGirl.png";

const Link = styled(BasicLink)(() => ({
  textDecoration: "none",
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface SignIn {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAlert } = useContext(Context);

  const signIn = async ({ firstName, lastName, email, password }: SignIn) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser?.updateProfile({
        displayName: `${lastName} ${firstName}`,
      });
    } catch ({ message }) {
      setAlert({ message, severity: "error", show: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      signIn(values);
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Box>
      <Head>
        <title>Register</title>
      </Head>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                label="First name"
                {...getFieldProps("firstName")}
                error={!!(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />

              <TextField
                fullWidth
                label="Last name"
                {...getFieldProps("lastName")}
                error={!!(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Stack>

            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={!!(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                      sx={{ mr: -1.5 }}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <LoadingButton
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              loading={isSubmitting}
            >
              Sign Up
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
      <Typography
        align="center"
        variant="body2"
        color="grey.600"
        sx={{ mt: 2.5 }}
      >
        Already have an account? <Link href="/login">Sign In</Link>
      </Typography>
    </Box>
  );
}

Register.getLayout = (page: React.ReactNode) => (
  <AuthLayout img={LeavingGirlIcon.src} greetings="Hi, Welcome">
    {page}
  </AuthLayout>
);
