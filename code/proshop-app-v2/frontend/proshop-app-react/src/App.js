import './App.css';
import Header from './modules/shared/layout/Header';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DashboardRouteConfig  from './modules/dashboard/DashboardRouting';
import ProjectsRouting from './modules/projects/ProjectsRouting';
import AdministrationRouting from './modules/administration/AdministrationRouting';
import AASRouting from './modules/aas/AASRouting';
import DataPipelinesRouting from './modules/datapipelines/DataPipelinesRouting';
import PrivateRoute from './modules/aas/components/PrivateRoute';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <main>
        <Container>
          <div className="content">
            <Switch>
              <PrivateRoute path="/dashboard" component={DashboardRouteConfig} />
              <PrivateRoute path="/projects" component={ProjectsRouting} />
              <PrivateRoute path="/administration" component={AdministrationRouting} />
              <PrivateRoute path="/datapipelines" component={DataPipelinesRouting} />
              <AASRouting></AASRouting>
            </Switch>
          </div>
      </Container>
      </main>
    </BrowserRouter>
  </>
  );
}

export default App;
