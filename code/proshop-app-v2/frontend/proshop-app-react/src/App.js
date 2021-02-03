import './App.css';
import Header from './modules/shared/layout/Header';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DashboardRouteConfig  from './modules/dashboard/DashboardRouting';
import ProjectsRouting from './modules/projects/ProjectsRouting';
import AdministrationRouting from './modules/administration/AdministrationRouting';
import AASRouting from './modules/aas/AASRouting';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <main>
        <Container>
          <div className="content">
            <DashboardRouteConfig></DashboardRouteConfig>
            <ProjectsRouting></ProjectsRouting>
            <AdministrationRouting></AdministrationRouting>
            <AASRouting></AASRouting>
          </div>
      </Container>
      </main>
    </BrowserRouter>
  </>
  );
}

export default App;
