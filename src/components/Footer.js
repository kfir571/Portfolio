import { Col, Container, Row } from "react-bootstrap"; 
import snail from "../assets/img/snail.png";
import linkedin_icon from '../assets/img/linkedin_icon.svg';
import git_icon from '../assets/img/git_icon.png';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} id="footer-sm-6">
                        <img id="footer-logo-img" src={snail} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon" id="footer-social-icon">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kfir-shabi1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BOHSzn7RScuJxTQ%2BpKTFZA%3D%3D"><img src={linkedin_icon} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/kfir571"><img className="git" src={git_icon} alt="" /></a>
                        </div>
                        <p>CopyRight 2024 Kfir Shabi.   All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
