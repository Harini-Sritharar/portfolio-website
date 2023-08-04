import {Col} from "react-bootstrap"
import code_img from '../assets/img/code_img.jpg'


export const LangCard = ({title}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={code_img} alt="Img" />
                <div className="proj-tx">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
}