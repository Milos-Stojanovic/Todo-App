import CSS from 'csstype';
import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Anchor, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'

const headerWrapper: CSS.Properties = {
    backgroundColor: "#282c34",
    color: 'white',
    WebkitBoxShadow: "-2px 5px 9px -3px rgba(0,0,0,0.78)",
    boxShadow: "-1px 5px 9px 0px rgba(0,0,0,0.78)"
};

function Header({user, setUser}) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function signOut() {
        const {error} = await supabase.auth.signOut();
        setUser(null);
        navigate("/");
    }

    function navigateHome() {
        navigate("/");
    }

    console.log(user)
    return (
        <Navbar style={headerWrapper}>
            <Container fluid className='justify-content-between'>

                <Navbar.Brand className="navbar-brand text-white fs-1"  role="button" onClick={() => navigateHome()}>TaskTracker</Navbar.Brand>

                {user?.name &&
                <>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white me-2 mt-2'>
                        {user.name}
                    </Navbar.Text>
                    <Button variant='info' className='mt-2 me-2' onClick={signOut}>
                        Sign Out
                    </Button>
                </Navbar.Collapse>
                </>
                }
                {!user?.name && 
                    <Button variant='info' /*className="mt-2 me-2"*/ onClick={handleShow}>
                        Sign In
                    </Button>
                }

            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='text-white' closeButton style={{backgroundColor: "#3c4048"}}>
                <Modal.Title >Login/SignUp</Modal.Title>
                </Modal.Header >
                <Modal.Body style={{backgroundColor: "#3c4048"}}>
                    <Auth 
                    supabaseClient={supabase}
                    appearance={{theme: ThemeSupa}}
                    //theme="dark"
                    providers={["google"]}
                    />
                </Modal.Body>
            </Modal>
        </Navbar>
        
  );
}

export default Header;
