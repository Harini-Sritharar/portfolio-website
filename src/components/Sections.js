// IMPORTS
import {Container,Row,Col,Tab,Nav  } from "react-bootstrap"
import cv from "../assets/cv.pdf"

// WIDGETS
import { LangCard } from "./LangCard"
import { ProjectCard } from "./ProjectCard"
// IMAGES
import quiz_app_img from '../assets/img/projects/quiz_app.jpeg'
import viz_img from '../assets/img/projects/viz.jpg'
import img from '../assets/img/projects/web2.jpg'
import bakingimg from '../assets/img/projects/web.jpg';
import pintos from '../assets/img/projects/pintos.jpg'
import wacc from '../assets/img/projects/compiler.jpg'
import ichack from '../assets/img/projects/hackathon.jpg'
import drp from '../assets/img/projects/drp.jpg'

export const Sections = () => {
    const projects_cards = [
        {
            title: "Revision Quiz App",
            description: "A Level Coursework : Application targeted towards aiding students in exam years with revision",
            language: "Dart, Flutter",
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
            title: "StudyPal (2nd Year DRP project)",
            description: "Timetabler app that autoschedules revision whilst adapting to changing commitments",
            language: "Kotlin",
            imgUrl: drp
        },
        {
            title: "Pintos",
            description: "Operating System for the 80x86 architecture",
            language: "C",
            imgUrl: pintos
        },
        {
            title: "ICHack 2024 (Hackathon Project)",
            description: "Developed the front end for a innovative teaching platform for young children",
            language: "C",
            imgUrl: ichack
        },
        {
            title: "WACC",
            description: "Compiler written for a basic language called WACC",
            language: "Scala",
            imgUrl: wacc
        },
        {
            title: "ICBakingSoc Website",
            description: "Created a communal recipe blog using Firebase",
            language: "React, JavaScript, CSS",
            imgUrl: bakingimg
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
            title: "Scala",
        },
        {
            title: "HTML/CSS",
        },
        {
            title: "JavaScript"
        }
    ]

    return (
        <section className="section" id="projects">
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="section-tabs" defaultActiveKey="first">
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
                                                I am a third year MEng Computing student at Imperial College London. 
                                                Seeking a 6 month industrial placement to obtain experience and skills as a software engineer
                                                <br></br>
                                                <br></br>

                                                I love experimenting with new programming languages and frameworks. Throughout the last five years, I have gained an insight into a multitude of programming languages via personal and group projects and become skilled with Git.
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
                                <br></br>
                                <h3>Check out my CV for more information!</h3>
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