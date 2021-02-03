import { Container, Row, Col } from 'react-bootstrap';
import SigInSchmea from '../validatioins/SignInValidation';
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignIn = () => {

    const initialValues = {
        email: "",
        password: ""
      };

    const handleSubmit = (values) => {
        console.log("handleSubmit ", values);
    }

    return (
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={SigInSchmea}
            onSubmit={handleSubmit}
        >
            {(formik) => {
                const { errors, touched, isValid } = formik;
                return (
                    <Container>
                        <div>
                            <h3>Sign In</h3>
                            <Form noValidate >
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field type="email" name="email" id="email" placehlder="Email" className={errors.email && touched.email ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="email" component="span" className="error has-error" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" id="password" placehlder="Email" className={errors.password && touched.password ? "form-control has-form-field-error " : "form-control"} />
                                            <ErrorMessage name="password" component="span" className="error" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <button type="submit" disabled={!isValid} className="btn btn-primary btn-block">Submit</button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Container>
                );
            }}
            </Formik>
        </>
    )
}

export default SignIn;