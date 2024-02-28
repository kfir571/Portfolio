import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Kfir Shabi, `}<span className="wrap">Web Developer</span></h1>
                        <p>I am a motivated Computer Science student, looking for my first position in the software industry.
                            I am eager to learn new subjects, work in a team together with other talented people, and make an impact
                            through my work.
                            I have working experience with Web and Mobile technologies: React, Typescript, Javascript, Kotlin, Java, Python and 
                            more, along with development tools and environments such as Jira, Git and Github etc.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Imge" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}