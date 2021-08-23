import GreetingsGirlIcon from "../common/icons/GreetingsGirl.png";
import { Box, Typography } from "@material-ui/core";

import * as Yup from "yup";
import React, { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import BasicLink from "next/link";
import { styled } from "@material-ui/styles";
import AuthLayout from "../Layouts/AuthLayout";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Link = styled(BasicLink)(() => ({
  textDecoration: "none",
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema,
    onSubmit: () => {},
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <Box>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
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
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
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
            Login
          </LoadingButton>
        </Form>
      </FormikProvider>
      <Typography
        align="center"
        variant="body2"
        color="grey.600"
        sx={{ mt: 2.5 }}
      >
        Don’t have an account?&nbsp;
        <Link href="/register">Get started</Link>
      </Typography>
    </Box>
  );
}

Login.getLayout = (page: React.ReactNode) => (
  <AuthLayout img={GreetingsGirlIcon.src} greetings="Hi, Welcome Back">
    {page}
  </AuthLayout>
);
