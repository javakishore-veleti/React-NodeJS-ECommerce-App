import { Switch, Route } from "react-router-dom"
import AdministrationHome from './components/AdministrationHome';

const AdministrationRouting = () => {

    return (

        <>

            <Switch>
                <Route path="/administration">
                    <AdministrationHome></AdministrationHome>
                </Route>
            </Switch>

        </>

    );
}

export default AdministrationRouting;