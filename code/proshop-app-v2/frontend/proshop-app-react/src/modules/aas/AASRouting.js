import { Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const AASRouting = () => {

    return (
        <>

            <Switch>
                <Route path="/signup">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <SignUp></SignUp>
                        </div>
                    </div>
                </Route>
                <Route path="/signin">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <SignIn></SignIn>
                        </div>    
                    </div>
                </Route>
            </Switch>
        </>
    )
}

export default AASRouting;