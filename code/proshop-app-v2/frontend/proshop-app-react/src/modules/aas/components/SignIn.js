import { Container, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';




const SignIn = () => {


    const registerUser = () => {
        

    }


    return (
        <>
            <Container>
                <div>
                    <h3>Sign In</h3>
                    <Form>
                        <Row>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placehlder="Email" />
                        </div>
                        </Row>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placehlder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" onClick={registerUser}>Submit</button>
                    </Form>
                </div>
            </Container>

        </>
    )
}

export default SignIn;