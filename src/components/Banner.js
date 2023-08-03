// IMPORTS
import { useState,useEffect, useCallback,useMemo} from "react"
import {Container,Row,Col} from  "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
export const Banner = () => {
    // CONSTS
    const toRotate = useMemo(() => ["Student", "Developer", "Designer"],[]);
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; // time delay in letters being typed out
    // FUNCTIONS
    
    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) 
                          : fullText.substring(0,text.length + 1);

                          setText(updatedText);
                          
                          if (isDeleting){
                              setDelta(prevDelta => prevDelta / 2);
                            }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    },[isDeleting,loopNum,text,toRotate])
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text,delta,tick])
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-centre">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">My Portfolio</span>
                        <h1>{`Hi I'm Harini Sritharar `}<br></br><span className="wrap">{text}</span></h1>
                        <button onClick={() => console.log('connect')}>Let's connect!</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img src ={''} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}