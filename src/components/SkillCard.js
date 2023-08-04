import {Col} from "react-bootstrap"
import skill_img from '../assets/img/blue_bg.avif'

export const SkillCard = ({title}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={skill_img} alt="Img"/>
                <div className="proj-tx">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
}