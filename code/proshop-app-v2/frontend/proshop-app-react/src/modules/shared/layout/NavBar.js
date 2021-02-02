
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <NavItem><Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/administration"><FontAwesomeIcon icon={faToolbox} /> Administration</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/dataconnections"><FontAwesomeIcon icon={faTable} /> Data Connections</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/signup"><FontAwesomeIcon icon={faRegistered} /> Sign Up</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/signin"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Link></NavItem>
                        </Nav>
                    </Container>
                </Navbar>
                
            </header>
        </>

    );
}

export default AppNavBar;