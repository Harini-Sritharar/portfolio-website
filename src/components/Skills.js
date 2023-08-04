// IMPORTS
import Carousel from "react-multi-carousel"
import {Container,Col,Row} from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css'
import skills from "../assets/img/skills-icon.jpg"
import bg_left from "../assets/img/bg-left.avif"

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
                            <p>Dummy Text<br></br> More Dummy Text</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Web Development2</h5>
                                </div>
                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Web Development3</h5>
                                </div>
                                <div className="item">
                                    <img src={skills} alt='img'/>
                                    <h5>Web Development4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </section>
    )
}