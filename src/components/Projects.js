// IMPORTS
import {Container,Row,Col,Tab,Nav  } from "react-bootstrap"
import cv from "../assets/cv.pdf"

// WIDGETS
import { LangCard } from "./LangCard"
import { ProjectCard } from "./ProjectCard"
// IMAGES
import quiz_app_img from '../assets/img/projects/quiz_app.jpeg'
import viz_img from '../assets/img/projects/viz.png'


export const Projects = () => {
    const projects_cards = [
        {
            title: "Revision Quiz App",
            description: "A Level Coursework : Application targeted towards aiding students in exam years with revision",
            language: "Dart",
            imgUrl: quiz_app_img
        },
        {
            title: "Viz",
            description: "Audio Visualiser specialising in WAV files",
            language: "C",
            imgUrl: viz_img
        },
    ]

    const language_cards = [
        {
            title: "Java",
        },
        {
            title: "Dart",
        },
        {
            title: "Haskell",
        },
        {
            title: "C",
        },
        {
            title: "Python",
        },
        {
            title: "JavaScript",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> About Me </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Projects </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Languages </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Col>
                                        <div className="skill-box">
                                            <h2>
                                                Inquisitive, Eager, Committed
                                            </h2>
                                            <p>
                                                I am a first year MEng Computing student at Imperial College London.
                                                <br></br>
                                                <br></br>

                                                I love experimenting with new programming languages and frameworks. Last year, I taught myself Dart for my A Level project and have obtained experience in mobile app development.
                                                Throughout the last two years, I have gained an insight into a multitude of programming languages and become skilled with Git.
                                                <br></br>
                                                <br></br>
                                                Seeking to obtain experience and skills as a software engineer
                                                <br></br>
                                                <br></br>
                                                <a href={cv}> My CV </a>
                                                </p>
                                        </div>
                                    </Col>
                                    </Row>
                                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects_cards.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                        )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                             <Tab.Pane eventKey="third"> 
                                <Row>
                                        {
                                            language_cards.map((project,index) => {
                                                return (
                                                    <LangCard
                                                        key={index}
                                                        {...project}/>
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
        </section>
    )
}