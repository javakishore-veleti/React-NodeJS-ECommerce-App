
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {

    return (

        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Pipelines</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/dashboard">Dashboard</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/projects">Projects</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/administration">Administration</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/dataconnections">Data Connections</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/dataconnections">Data Connections</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/signup">Sign Up</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/signin">Sign In</Link></NavItem>
                </Nav>
            </Navbar>
        </>

    );
}

export default AppNavBar;