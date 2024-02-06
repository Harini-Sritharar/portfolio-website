// IMPORTS
import {Container,Row,Col,Tab,Nav  } from "react-bootstrap"
import cv from "../assets/cv.pdf"

// WIDGETS
import { LangCard } from "./LangCard"
import { ProjectCard } from "./ProjectCard"
// IMAGES
import quiz_app_img from '../assets/img/projects/quiz_app.jpeg'
import viz_img from '../assets/img/projects/viz.png'
import img from '../assets/img/projects/web.webp'
import pintos from '../assets/img/projects/pintos.png'
import wacc from '../assets/img/projects/compiler.png'
import ichack from '../assets/img/projects/hackathon.png'


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
        {
            title: "Portfolio Website",
            description: "React Website which serves as a dynamic portfolio",
            language: "JavaScript, CSS",
            imgUrl: img
        },
        {
            title: "Pintos",
            description: "Operating System for the 80x86 architecture",
            language: "C",
            imgUrl: pintos
        },
        {
            title: "WACC",
            description: "Compiler written for a basic language called WACC",
            language: "Scala",
            imgUrl: wacc
        },
        {
            title: "ICHack 2024 (Hackathon Project)",
            description: "Developed the front end for a innovative teaching platform to help young children get  ",
            language: "C",
            imgUrl: ichack
        }
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
            title: "React",
        },
        {
            title: "Scala",
        },
        {
            title: "HTML/CSS",
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
                                                I am a second year MEng Computing student at Imperial College London.
                                                <br></br>
                                                <br></br>

                                                I love experimenting with new programming languages and frameworks. Throughout the last three years, I have gained an insight into a multitude of programming languages via personal and group projects and become skilled with Git.
                                                <br></br>
                                                <br></br>
                                                Seeking to obtain experience and skills as a software engineer via an internship
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