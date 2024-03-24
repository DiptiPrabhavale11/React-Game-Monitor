import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {Button} from "react-bootstrap";

const AppHeader = ({user,setUser}) => {
    const handleLogout=()=>{
        window.localStorage.clear();
        setUser(null);
    }
    return (
        <>
            <Navbar variant="dark" fixed="top" style={{ width:'100%', height:'90px', backgroundColor: '#545c81', color: '#fff' , padding: '0px'}}>
                <Container>
                    <Navbar.Brand style={{width:'80%'}}>
                        <h2 style={{fontSize: '30px' }}>Logs Monitor</h2>
                    </Navbar.Brand>
                    <Nav className="me-auto" style={{ color: 'white'}}>
                        <LinkContainer to="/logs" >
                            <Nav.Link>Logs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
                {user && <Button onClick={handleLogout} variant="dark" style={{alignSelf: 'flex-end',backgroundColor:'#a25151'}}>Logout</Button>}
            </Navbar>
        </>
    )
}
export default AppHeader;