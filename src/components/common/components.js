import React from "react"
import {Row, Col} from "antd"
import styled, {keyframes} from 'styled-components';

const Section = styled.div`
    background-color: #1C1D21 !important;
    width: 100%;

    width: 100vw;

    /* Remove any browser-default margins. */
    margin: 0;
    padding: 0;
`;

const Section2 = styled.div`
    background-color: #1C1D21 !important;
    width: 100%;

    /* Remove any browser-default margins. */
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
`;

// return <Slide left>{props.children}</Slide>
const FadeInDiv = ({direction, children}) => {
    const dataSal = direction == "fade"? "fade" : direction=="left"? "slide-left" : "slide-right";
    return (
        <div 
        data-sal={dataSal}
        data-sal-delay="100"
        data-sal-duration="600"
        data-sal-easing="ease"
        >{children}
        </div>)
}

const Section3 = (props) => {

    return (
        <Section2>
            <div style={{paddingTop: "80px"}}>
                <Row>
                    <Col lg={{span: 4, offset: 6}} md={{span: 16, offset: 4}} style={{marginBottom: "20px", fontSize: "1.6em", color: "#8EA4D2", fontWeight: "bold"}}>
                        <FadeInDiv direction={"right"}>{props.title}</FadeInDiv>
                    </Col>
                    <Col lg={{span: 8, offset: 0}} md={{span: 16, offset: 4}} style={{fontSize: "1.2em", color: "#ddd"}}>{props.children}</Col>
                </Row>
            </div>
        </Section2>
    )
}


export {Section, Section2, Section3, FadeInDiv}
