import React from "react"
import {Row, Col, Space} from "antd"
import {Section3} from "../common/components"
import {SubSubtitle} from "../common/text"
import {Slide} from 'react-reveal';


const subTitleStyle = {
    color: "#ddd",
    fontWeight: "bold"
}

const ResearchInterests = () => {

    return (
        <Space direction="vertical" size={20}>

            <Slide right>
                <SubSubtitle style={subTitleStyle}>Natural Language Processing</SubSubtitle>
                <div>In this modern era when users generate unprecedented volumes of online text data, never has the field of natural language processing (NLP) and linguistics been so appealing. As written records exist in every field, whether it be healthcare, banking, government issues, or even in social media, the ability to make sense of textual data can be utilized to resolve a wide range of problems. </div>
            </Slide>

            <Slide right>
                <SubSubtitle style={subTitleStyle}>Recommendation System</SubSubtitle>
                <div>How to build a system that understands what users want through their behavior interests me. I also find nuances in recommender systems between difference businesses intriguing to explore (e.g., entertainment services may care more about serendipity and novelty whereas e-commerces also require to care about the item’s margin, stock availability, and relevance.)</div>
            </Slide>

            <Slide right>
                <SubSubtitle style={subTitleStyle}>Computational Social Science</SubSubtitle>
                <div>With social interactions moving to digital realm, the availability of data provides an opportunity to study society and human behavior through digital data. I’m interested in utilizing these online data, especially in social media, to analyze and understand complex online social phenomenon. Even in Thailand, many social movements were originated from the online realm.</div>
            </Slide>

        </Space>
    )
}

const Research = () => {

    return (
        <Section3 title={"Research Interests"}>
            <ResearchInterests />
        </Section3>
    )
}

export default Research
