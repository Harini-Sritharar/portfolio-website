// IMPORTS
import {Container,Row,Col,Tab,Nav  } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import quiz_app_img from '../assets/img/quiz_app.jpeg'

export const Projects = () => {
    const projects = [
        {
            title: "Revision Quiz App",
            description: "Design, Development and Testing",
            imgUrl: quiz_app_img
        },
        {
            title: "Revision Quiz App",
            description: "Design, Development and Testing",
            imgUrl: quiz_app_img
        }

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Description</p>

                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Project 1 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Project 2 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Project 3 </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                        )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second"> Pane 2</Tab.Pane>
                            <Tab.Pane eventKey="third"> Pane 3</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}