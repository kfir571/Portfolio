import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Desiner", "UI/UX Desiner"];
    const [text, setText] = useState('');
    const[delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText =toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDalta => prevDalta /2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Kfir Shabi `}<span className="wrap">{text}</span></h1>
                        <p>I am a motivated Computer Science student, looking for my first position in the software industry.
                            I am eager to learn new subjects, work in a team together with other talented people, and make an impact
                            through my work.
                            I have working experience with Web and Mobile technologies: React, Typescript, Javascript, Kotlin, Java, Python and 
                            more, along with development tools and environments such as Jira, Git and Github etc.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Imge" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}