// IMPORTS
import Carousel from "react-multi-carousel"
import {Container,Col,Row} from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css'
import skills from "../assets/img/skills/skills-icon.jpg"
import skills2 from "../assets/img/skills/skills.png"
import { SkillCard } from "./SkillCard"

export const Skills = () => {
// CONSTS
    const responsive = {
        desktop: {
            breakpoint: {max:3000,min:1024},
            items:3
        },
        tablet: {
            breakpoint: {max:1024,min:464},
            items:2
        },
        mobile: {
            breakpoint: {max:464,min:0},
            items:1
        }
    };

    const skill_cards = [
        {
            name: "Web Development",
            imgUrl: skills
        },
        {
            name: "Mobile Development",
            imgUrl: skills2
        },
        {
            name: "Machine Learning",
            imgUrl: skills
        },
        {
            name: "Technical Writing",
            imgUrl: skills2
        },
        {
            name: "Tutoring",
            imgUrl: skills
        },
        {
            name: "Git",
            imgUrl: skills2
        },
        {
            name: "Firebase",
            imgUrl: skills
        },
        {
            name: "Adaptability",
            imgUrl: skills2
        }


    ]
    
    return (
        <section className="skill" id ="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    skill_cards.map((skill,index) => {
                                        return(
                                            <SkillCard 
                                                key={index}
                                                skill_img={skill.imgUrl}
                                                name={skill.name}/>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </section>
    )
}