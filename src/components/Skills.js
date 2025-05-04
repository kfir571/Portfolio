import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import web_development from "../assets/img/skills_svg/web_development.svg"
import android from "../assets/img/skills_svg/android.svg"
import python from "../assets/img/skills_svg/python.svg"
import react from "../assets/img/skills_svg/react.svg"
import java_script from "../assets/img/skills_svg/javas_cript.svg"
import html from "../assets/img/skills_svg/html.svg"
import css from "../assets/img/skills_svg/css.svg"
import git from "../assets/img/skills_svg/git.svg"
import cpp from "../assets/img/skills_svg/cpp2.png"
import c from "../assets/img/skills_svg/letter-c.png"

import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const skilsMap = [
        {
            src:c,
            alt:"cpp_image",
            discription:"C"
        },
        {
            src:cpp,
            alt:"c_image",
            discription:"C++"
        },
        {
            src: web_development,
            alt: "web_development_image",
            discription: "Web Development",
        },
        {
            src: android,
            alt: "android_image",
            discription: "Android",
        },
        {
            src: react,
            alt: "react_image",
            discription: "React & React Native"
        },
        {
            src: python,
            alt: "python_image",
            discription: "Python",
        },
        {
            src: java_script,
            alt: "java_script_image",
            discription: "JavaScript",
        },
        {
            src: html,
            alt: "html_image",
            discription: "HTML",
        },
        {
            src: css,
            alt: "css_image",
            discription: "CSS"
        },
        {
            src:git,
            alt:"git_iImage",
            discription:"Git",
        }];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <img className="background-image-left" src={colorSharp} alt="background-img" />
            <Container className="test">
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skilsMap.map((skil, index) => (
                                    <div className="item" index={index}>
                                        <img src={skil.src} alt={skil.alt} />
                                        <h5>{skil.discription}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}