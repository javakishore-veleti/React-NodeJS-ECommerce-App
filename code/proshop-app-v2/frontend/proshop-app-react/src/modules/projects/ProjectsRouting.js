import { Switch, Route } from 'react-router-dom';
import ProjectsHome from './components/ProjectsHome';

const ProjectsRouting = () => {

    return (

        <>

            <Switch>
                <Route path="/projects">
                    <ProjectsHome/>
                </Route>
            </Switch>

        </>

    );
    
}

export default ProjectsRouting;