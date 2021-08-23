import LeavingGirlIcon from "../common/icons/LeavingGirl.png";
import { Box, Typography } from "@material-ui/core";

import * as Yup from "yup";
import { useState } from "react";
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
import { useContext } from "react";
import { Context } from "../components/Unknown/Context/Context";
import AuthLayout from "../Layouts/AuthLayout";

const Link = styled(BasicLink)(() => ({
  textDecoration: "none",
}));

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    setSubmitting,
  } = formik;
  
  const { setAlert } = useContext(Context);
  return (
    <Box>
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
              onClick={() =>
                setAlert({
                  show: true,
                  message: "asd",
                  severity: "success",
                })
              }
            >
              Register
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
        Already have an account?&nbsp;
        <Link href="/login">Login</Link>
      </Typography>
    </Box>
  );
}

Register.getLayout = (page: React.ReactNode) => (
  <AuthLayout img={LeavingGirlIcon.src} greetings="Hi, Welcome">
    {page}
  </AuthLayout>
);
