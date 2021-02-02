
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

const AppNavBar = () => {

    return (

        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Pipelines</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#administration">Administration</Nav.Link>
                <Nav.Link href="#administration/data-connections">Data Connections</Nav.Link>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
                <Nav.Link href="#signin">Sign In</Nav.Link>
                </Nav>
            </Navbar>
        </>

    );
}

export default AppNavBar;