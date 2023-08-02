import CSS from 'csstype';
import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
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
        <nav className="navbar navbar-expand-lg nav-bottom" style={headerWrapper}>
            <div className="container-fluid mt-2 d-flex align-items-center">
                <a className="navbar-brand text-white fs-1 pe-auto"  role="button" onClick={() => navigateHome()}>TaskTracker</a>
                <ul> 
                    {user?.email && 
                        <Button variant='info' className="mt-3 me-3" onClick={signOut}>
                            Sign Out
                        </Button>
                    }
                    {!user?.email && 
                        <Button variant='info' className="mt-3 me-3" onClick={handleShow}>
                            Sign In
                        </Button>
                    }
                </ul>
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
        </nav>
        
  );
}

export default Header;
