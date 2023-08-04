// IMPORTS
import {Col} from "react-bootstrap"

export const Card = ({title,imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Img" />
                <div className="proj-tx">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
}