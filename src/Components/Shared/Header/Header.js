import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink} from "react-router-hash-link";
import { Link } from 'react-router-dom';

const Header = () => {
    const {user , logOut}  = useAuth();
    
    // console.log(user);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">G CAR</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                    {
                        user.email ? <button onClick={logOut} >Logout</button>
                         : <Nav.Link as={ Link }  to="/login"  >Login</Nav.Link>
                    }
                    
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user.displayName && user.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </>
    );
};

export default Header;