import { Container, Row, Col } from 'react-bootstrap';
import SigInSchmea from '../validatioins/SignInValidation';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {

    const initialValues = {
        email: "",
        password: ""
      };


    const validaeUserSignIn = async (event) => {
        event.preventDefault();
        const signInFormData =  {
            email: event.target[0].value,
            password: event.target[1].value
        };

        const isValid = await SigInSchmea.isValid(signInFormData);
    }


    return (
        <>
            <Container>
                <div>
                    <h3>Sign In</h3>
                    <Form onSubmit={validaeUserSignIn} noValidate>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placehlder="Email" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placehlder="Password" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default SignIn;