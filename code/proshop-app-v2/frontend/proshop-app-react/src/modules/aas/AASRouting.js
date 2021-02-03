import { Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthRoutes from './components/AuthRoutes';

const AASRouting = () => {

    return (
        <>
            <Switch>
                <AuthRoutes path="/signup" component={SignUp}></AuthRoutes>
                <AuthRoutes path="/signin" component={SignIn}></AuthRoutes>
            </Switch>
        </>
    )
}

export default AASRouting;