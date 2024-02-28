import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import web_development from "../assets/img/skills_svg/web-development.png"
import android from "../assets/img/skills_svg/android.svg"
import python from "../assets/img/skills_svg/python.svg"
import react from "../assets/img/skills_svg/react.svg"
import java_script from "../assets/img/skills_svg/javas_cript.svg"
import html from "../assets/img/skills_svg/html.svg"
import css from "../assets/img/skills_svg/css.svg"
import git from "../assets/img/skills_svg/git.svg"

import colorSharp from "../assets/img/color-sharp.png"




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
            <img className="background-image-left" src={colorSharp} />
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={web_development} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={android} alt="Image" />
                                    <h5>Android</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React & React Native</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java_script} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}