import { Container } from 'react-bootstrap';
import '../styles/aas.css';
import { SignUpSchema } from '../validatioins/SignInValidation';
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const handleOnSubmit = (values, actions) => {
        actions.setSubmitting(false);
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={SignUpSchema}
                onSubmit={handleOnSubmit}
            >
                {
                    (formik) => {
                        
                        const { errors, touched, isValid } = formik;

                        return (
                            <Container>
                                <div>
                                    <h3>Sign Up</h3>
                                    <Form noValidate>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" name="email" id="email" placehlder="Email" className={errors.email && touched.email ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="email" component="span" className="error has-error" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" id="password" placehlder="Password" className={errors.password && touched.password ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="email" component="span" className="error has-error" />
                                        </div>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <Field type="text" name="firstName" id="firstName" placehlder="First Name" className={errors.firstName && touched.firstName ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="firstName" component="span" className="error has-error" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <Field type="text" name="lastName" id="lastName" placehlder="Last Name" className={errors.lastName && touched.lastName ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="lastName" component="span" className="error has-error" />
                                        </div>
                                        <button type="submit" disabled={!isValid} className="btn btn-primary btn-block">Submit</button>
                                    </Form>
                                </div>
                            </Container>

                        );
                    }
                }
            </Formik>
        </>
    )
}

export default SignUp;