import { render } from '@testing-library/react';
import CSS from 'csstype';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Auth } from '@supabase/auth-ui-react';
import supabase from '../config/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared'

const mainPageWrapper: CSS.Properties = {
    backgroundColor: "#282c34",
    display: "flex",
    marginTop: "5vh",
    marginBottom: "30vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "40px"
};

function Home() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getStarted() {
        navigate("/signIn");
    }

    return(
        <Container style={mainPageWrapper}>
            <div className='d-flex flex-column align-items-center'>
                <Image  style={{maxWidth: "20%"}} src={require("../assets/images/list-main-page.png")} />
                <h2 className='fs-1 mt-5'>Track your tasks effortlessly</h2>
                <p className='fs-5 mt-3 text-center'>
                    TaskTracker simplifies your life by offering an intuitive and user-friendly platform to manage your tasks. Whether it's personal errands, work projects, or academic assignments, our app ensures you stay on top of everything with ease. Create, prioritize, and categorize tasks effortlessly, allowing you to focus on what matters most.
                </p>
                <Button className='fs-1 mt-3' variant='info' onClick={handleShow}>Get Started</Button>
            </div>

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

        </Container>
    );
    
}

export default Home;