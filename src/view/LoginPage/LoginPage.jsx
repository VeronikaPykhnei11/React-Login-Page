import React, {useState} from 'react';
import './LoginPage.css';
import './LoginPage.css';
import LogoMaker from "../../component/LogoMaker/LogoMaker";
import Logo from "../../assets/images/login-logo.png";
import passwordEyeError from "../../assets/images/password-eye-error.svg";
import passwordEye from "../../assets/images/password-eye.svg";
import {Field, Form, Formik} from "formik";
import {LogInSchema} from "../../Schemas/LogInSchema/LogInSchema";
import FormErrorText from "../../component/FormErrorText/FormErrorText";
import FormFooter from "../../component/FormFooter/FormFooter";
import FormTitle from "../../component/FormTitle/FormTitle";
import CustomButton from "../../component/CustomButton/CustomButton";
import PictureForScreenMaker from "../../component/PictureForScreenMaker/PictureForScreenMaker";

export default function LoginPage() {
    const [state, handleClick] = useState(false);

    return (
        <>
            <LogoMaker imgClass="image" src={Logo} alt="logo"/>
            <div className={"formWrapper"}>
                <div className={"formContent"}>
                    <FormTitle text="LOGIN"/>
                    <Formik
                        action="#"
                        aria-label="sign in"
                        className="form-login"
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={LogInSchema}
                        onSubmit={(values) => {
                            alert("Email: " + values.email + "   " + "Password: " + values.password);
                        }}>
                        {({
                              values,
                              handleChange,
                              handleSubmit,
                              errors,
                              touched,
                              handleBlur,
                              isValid
                          }) => (
                            <Form autoComplete={"off"} onSubmit={handleSubmit}>
                                <div
                                    className={(errors.email && touched.email) ? "error-login-email" : "input-wrapper"}>
                                    <Field
                                        name="email"
                                        autoComplete="new-password"
                                        className={(errors.email && touched.email) ? "input-data-error" : "input-data"}
                                        type="text"
                                        placeholder="Email address"
                                        label="Email"
                                        validationSchema={LogInSchema}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.email && touched.email && (
                                    <FormErrorText class="error-text-email" text={errors.email}/>)}
                                <div
                                    className={(errors.password && touched.password) ? "error-login-password" : "input-wrapper"}>
                                    <Field
                                        name="password"
                                        autoComplete="new-password"
                                        className={(errors.password && touched.password) ? "input-data-error" : "input-data"}
                                        type={state ? "text" : "password"}
                                        placeholder="Password"
                                        label="Password"
                                        validationSchema={LogInSchema}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <img
                                        src={(errors.password && touched.password) ? passwordEyeError : passwordEye}
                                        onClick={() => handleClick(!state)}
                                        alt="password-eye"
                                        className="password-img"
                                    />
                                </div>
                                {errors.password && touched.password && (
                                    <FormErrorText class="error-text-password" text={errors.password}/>)}
                                <CustomButton
                                    divClass={"button-wrapper"}
                                    action1={!isValid}
                                    classAction1={"button-submit-error"}
                                    classAction2={"button-submit"}
                                    type={"submit"}
                                    text={"LOG IN"}
                                />
                                <div className="forgot-password-login">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <FormFooter
                        divClass="login-footer"
                        spanClass="form-footer-login"
                        text="Don't have an account yet?"
                        link="#"
                        linkText="Register"
                    />
                </div>
            </div>
            <PictureForScreenMaker/>
        </>
    );
}