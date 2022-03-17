import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { createAccount } from "./../../store/action";
import "./style.scss";

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const registerSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required!")
      .matches(/^[A-Za-z ]*$/, "Please enter valid name!"),
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(16, "Too Long!")
      .required("Required!"),
    confirmPassword: Yup.string()
      .required("Required!")
      .oneOf([Yup.ref("password"), null], "Password must match!"),
  });

  const handleSubmitForm = (values) => {
    dispatch(
      createAccount({
        fullName: values.fullName,
        userName: values.userName,
        password: values.password,
      })
    );
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <h1 className="register__title">Register Form</h1>
          <p className="register__description">
            Please fill in this form to create an account!
          </p>
        </div>
        <div className="register__main">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values) => handleSubmitForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="register__wrapper">
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    variant="outlined"
                    className="register__input"
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="register__error">{errors.fullName}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    type="text"
                    className="register__input"
                  />
                  {errors.userName && touched.userName && (
                    <div className="register__error">{errors.userName}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="register__input"
                  />
                  {errors.password && touched.password && (
                    <div className="register__error">{errors.password}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    className="register__input"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="register__error">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <Button type="submit" variant="contained">
                  Register
                </Button>
                <p>
                  Already have an account?{" "}
                  <span
                    className="register__checkbox--color"
                    onClick={() => history.push("./login")}
                  >
                    Log In
                  </span>
                </p>
                <p
                  className="register__checkbox--color"
                  onClick={() => history.push("/")}
                >
                  Back to Home?
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Register;
