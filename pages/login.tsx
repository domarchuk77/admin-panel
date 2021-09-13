import { useEffect, useContext } from "react";
import * as Yup from "yup";
import Head from "next/head";
import { useState } from "react";
import BasicLink from "next/link";
import { useFormik, Form, FormikProvider } from "formik";
import firebase from "firebase";

import { LoadingButton } from "@material-ui/lab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { styled } from "@material-ui/styles";
import AuthLayout from "../components/Unknown/AuthLayout";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/system/Box";
import TextField from "@material-ui/core/TextField";
import Stack from "@material-ui/core/Stack";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { Context } from "../components/Unknown/Context";

import GreetingsGirlIcon from "../assets/icons/GreetingsGirl.png";

const Link = styled(BasicLink)(() => ({
  textDecoration: "none",
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface SignIn {
  email: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAlert } = useContext(Context);
  useEffect(
    () =>
      setAlert({
        message: "You can sign in with demo data or register your account",
        severity: "info",
        show: true,
      }),
    []
  );

  const signIn = async ({ email, password }: SignIn) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch ({ message }) {
      setAlert({ message, severity: "error", show: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "demo@demo.demo",
      password: "demo12",
      remember: true,
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      signIn(values);
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <Box>
      <Head>
        <title>Login</title>
      </Head>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
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
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
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
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  {...getFieldProps("remember")}
                  checked={values.remember}
                />
              }
              label="Remember me"
            />
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Sign In
          </LoadingButton>
        </Form>
      </FormikProvider>
      <Typography
        align="center"
        variant="body2"
        color="grey.600"
        sx={{ mt: 2.5 }}
      >
        Don’t have an account? <Link href="/register">Get started</Link>
      </Typography>
    </Box>
  );
}

Login.getLayout = (page: React.ReactNode) => (
  <AuthLayout img={GreetingsGirlIcon.src} greetings="Hi, Welcome Back">
    {page}
  </AuthLayout>
);
