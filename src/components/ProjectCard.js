// IMPORTS
import {Col} from "react-bootstrap"

export const ProjectCard = ({title,description,language,imgUrl}) => {
    return (
        <Col sm={4} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Img" />
                <div className="proj-tx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <span>Developed with {language}</span>
                </div>
            </div>
        </Col>
    )
}