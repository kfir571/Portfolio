import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Kfir Shabi, `}<span className="wrap"> System & Web Developer</span></h1>
                        <p>
                            I’m a passionate Computer Science graduate with a strong foundation in system-level programming and modern web technologies.
                            I specialize in C, C++, OOP, Linux, and I’ve also built responsive front-end applications with React and back-end services with Flask and REST APIs.
                            I love solving complex problems, working in collaborative environments, and continuously learning.
                            Experienced with tools and technologies such as Git, Jira, Python, Javascript, Typescript, and more.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="img-astronut" src={headerImg} alt="Headder Imge" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}