import { Route } from "react-router-dom";

const RouteWithSubRoutes = (props) => {

    console.log("RouteWithSubRoutes ", props)
    return (
        <Route path={props.path} redner={ props2 =>
            <props.componnet {...props2} routes={props2.routes} />
        } />
    )
}

export default RouteWithSubRoutes;