import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import my_recipes from "../assets/img/project-img/my_recipes.jpg";
import cinma_manger from "../assets/img/project-img/cinma_manger.jpg";
import portfolio from "../assets/img/project-img/my_protfolio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import k_gpt from "../assets/img/project-img/k_gpt.png";
import fest_line_tracker from "../assets/img/project-img/fest_line_tracker.png"

export const Projects = () => {

    const androidProjects = [
        {
            title: "Recipe Manager",
            description: "",
            imgUrl: my_recipes,
            src: "https://github.com/kfir571/My-recipe-manager",
        },
        {
            title: "Cinema Manger",
            description: "",
            imgUrl: cinma_manger,
            src: "https://github.com/kfir571/KotlinApp",
        },
    ];

    const webProjects = [
        {
            title: "Fest Line Tracker",
            description: "",
            imgUrl: fest_line_tracker,
            src: "https://github.com/kfir571/fest_line_traker",
        },
        {
            title: "Portfolio",
            description: "",
            imgUrl: portfolio,
            src: "https://github.com/kfir571/Portfolio",
        },
        {
            title: "K-GPT",
            description: "Mock of Chat Gpt",
            imgUrl: k_gpt,
            src: "https://github.com/kfir571/chat-gpt-mock",
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Android App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="projects-container">
                                        {
                                            androidProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className="projects-container">
                                        {
                                            webProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background-img" />
        </section>
    )
}