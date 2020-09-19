import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  CircularProgress,
  Slide,
  Snackbar,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { auth, provider } from "../config/firebase";
import { Link, useHistory } from "react-router-dom";
import { useUserState, UserContext } from "../context/context";
import { actionType } from "../context/reducer";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email field is required"),
  password: Yup.string()
    .min(8, "Password is too short!")
    .max(16, "Passwod is too long")
    .required("Password field is required"),
});
const loginFormStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2),
    },
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
const LoginForm = () => {
  const classes = loginFormStyle();
  const [, dispatch] = useUserState(UserContext);
  const history = useHistory();
  const [authError, setAuthError] = useState(null);
  const handleClose = () => {
    setAuthError(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        dispatch({ type: actionType.SET_USER, payload: firebaseUser });
        history.push("/");
      }
    });
  }, [dispatch, history]);

  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider).catch((err) => setAuthError(err.message));
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then((resp) => {
              setSubmitting(false);
              resetForm({});
            })
            .catch((err) => {
              setAuthError(err.message);
              setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              name="email"
              label="Email"
              component={TextField}
              variant="filled"
              fullWidth
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : null}
            />

            <Field
              name="password"
              label="Password"
              type="password"
              component={TextField}
              variant="filled"
              fullWidth
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : null
              }
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom={2}
            >
              <Button
                disableRipple
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <CircularProgress size={24} style={{ marginRight: 16 }} />
                )}
                Login
              </Button>
              <Button
                disableRipple
                type="button"
                variant="outlined"
                color="primary"
                size="large"
                onClick={handleGoogleLogin}
              >
                <img
                  width="20px"
                  style={{ marginRight: 16 }}
                  alt="Google sign-in"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
                Login with Google
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Link to="/sign-up">Registe a new account</Link>
      <Snackbar
        open={authError ? true : false}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        message={authError}
        key="SlideTransition"
      />
    </div>
  );
};

export default LoginForm;
