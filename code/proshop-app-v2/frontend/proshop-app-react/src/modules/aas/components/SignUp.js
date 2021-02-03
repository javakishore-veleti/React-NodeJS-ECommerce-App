import { Container } from 'react-bootstrap';

const SignUp = () => {

    return (
        <>
            <Container>
                <div>
                    <h3>Sign Up</h3>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placehlder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placehlder="Password" />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placehlder="First Name" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placehlder="Last Name" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default SignUp;