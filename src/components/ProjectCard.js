// IMPORTS
import {Col} from "react-bootstrap"

export const ProjectCard = ({title,description,language,imgUrl}) => {
    return (
        <Col sm={2} md={3}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Img" className="proj-img" />
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