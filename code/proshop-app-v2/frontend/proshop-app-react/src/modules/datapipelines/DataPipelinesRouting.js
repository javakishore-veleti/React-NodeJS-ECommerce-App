import { Route, Switch} from 'react-router-dom';
import DataPipelinesHome from './components/DataPipelinesHome';

const DataPipelinesRouting = () => {

    return (
        <>
            <Switch>
                <Route path="/datapipelines" component={DataPipelinesHome}></Route>

            </Switch>
        </>
    )
}

export default DataPipelinesRouting;