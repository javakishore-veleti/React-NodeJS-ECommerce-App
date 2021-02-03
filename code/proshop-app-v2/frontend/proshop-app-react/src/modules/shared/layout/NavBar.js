
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faRegistered, faHome, faProjectDiagram, faToolbox, faTable, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const AppNavBar = () => {

    //const faCoffeeEleem = 

    return (

        <>
            <header>
                <Navbar bg="primary" variant="dark" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home">Pipelines</Navbar.Brand>
                        <Nav className="mr-auto">
                            <NavLink activeClassName="active" className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/administration"><FontAwesomeIcon icon={faToolbox} /> Administration</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/datapipelines"><FontAwesomeIcon icon={faTable} /> Data Pipelines</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/signup"><FontAwesomeIcon icon={faRegistered} /> Sign Up</NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/signin"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                
            </header>
        </>

    );
}

export default AppNavBar;