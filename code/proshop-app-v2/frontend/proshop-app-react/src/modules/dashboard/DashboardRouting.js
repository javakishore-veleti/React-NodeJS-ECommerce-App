import DashboardHome from "./components/DashboardHome";
import {Switch, Route} from "react-router-dom";

const DashboardRouteConfig = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboard">
                    <DashboardHome/>
                </Route>
            </Switch>
        </>
    )

  }
  
  export default DashboardRouteConfig;

  