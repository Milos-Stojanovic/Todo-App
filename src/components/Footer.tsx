import CSS from 'csstype';
import { Button, Container, Image } from 'react-bootstrap';

const footerWrapper: CSS.Properties = {
    backgroundColor: "#282c34",
    borderTop: "2px solid black",
    paddingTop: "1.5em",
    paddingBottom: "1.5em"
};


function Footer() {

    return (
        <footer className="page-footer" style={footerWrapper}>
            <div className="container d-flex text-white justify-content-center align-items-right">
                <span>
                  © 2023 Miloš Stojanović. All rights reserved.
                </span>
            </div>
        </footer>
  );
}

export default Footer;
