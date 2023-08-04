// IMPORTS
import Carousel from "react-multi-carousel"
import {Container,Col,Row} from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css'
import skills from "../assets/img/skills-icon.jpg"
import sk from "../assets/img/skills.png"

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
                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Web Development</h5>
                                </div>

                                <div className="item">
                                    <img src={sk} alt='img'/>
                                    <h5>Machine Learning</h5>
                                </div>

                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Problem Solving</h5>
                                </div>

                                <div className="item">
                                    <img src={sk} alt='img'/>
                                    <h5>Mobile Development</h5>
                                </div>

                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Part Time Tutor</h5>
                                </div>

                                <div className="item">
                                    <img src={sk} alt='img'/>
                                    <h5>Technical Writing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </section>
    )
}