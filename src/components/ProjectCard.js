// IMPORTS
import {Col} from "react-bootstrap"

export const ProjectCard = ({title,description,imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Img"/>
                <div className="proj-tx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}