import React from "react"
import {Row, Col} from "antd"
import styled, {keyframes} from 'styled-components';
import {Slide} from 'react-reveal';

const Section = styled.div`
    background-color: #1C1D21;
    height: 100%;
    width: 100%;

    height: 80vh;
    width: 100vw;

    /* Remove any browser-default margins. */
    margin: 0;
    padding: 0;
`;

const Section2 = styled.div`
    background-color: #1C1D21;
    height: 100%;
    width: 100%;

    /* Remove any browser-default margins. */
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
`;

const FadeInDiv = (props) => {
    return <Slide left>{props.children}</Slide>
}

const Section3 = (props) => {

    return (
        <Section2>
            <div style={{paddingTop: "80px"}}>
                <Row>
                    <Col span={4} style={{fontSize: "1.6em", color: "#8EA4D2", fontWeight: "bold"}} offset={6}>
                        <FadeInDiv direction={"left"}>{props.title}</FadeInDiv>
                    </Col>
                    <Col span={8} style={{fontSize: "1.2em", color: "#ddd"}}>{props.children}</Col>
                </Row>
            </div>
        </Section2>
    )
}


export {Section, Section2, Section3, FadeInDiv}
