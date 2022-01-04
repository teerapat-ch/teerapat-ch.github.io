import React from "react"
import {Row, Col, Space} from "antd"
import {Section3, FadeInDiv} from "../common/components"
import {SubSubtitle} from "../common/text"


const subTitleStyle = {
    color: "#ddd",
    fontWeight: "bold"
}

const ResearchInterests = () => {

    return (
        <Space direction="vertical" size={20}>

            <FadeInDiv direction="left">
                <SubSubtitle style={subTitleStyle}>Natural Language Processing</SubSubtitle>
                <div>In this modern era when users generate unprecedented volumes of online text data, never has the field of natural language processing (NLP) and linguistics been so appealing. As written records exist in every field, whether it be healthcare, banking, government issues, or even in social media, the ability to make sense of textual data can be utilized to resolve a wide range of problems. </div>
            </FadeInDiv>

            <FadeInDiv direction="left">
                <SubSubtitle style={subTitleStyle}>Recommendation System</SubSubtitle>
                <div>How to build a system that understands what users want through their behavior interests me. I also find nuances in recommender systems between different businesses intriguing to explore (e.g., streaming entertainment services may value more about serendipity and novelty whereas e-commerce services care more about about the product’s margin, stock availability, and relevance.)</div>
            </FadeInDiv>

            <FadeInDiv direction="left">
                <SubSubtitle style={subTitleStyle}>Computational Social Science</SubSubtitle>
                <div>With social interactions moving to the digital realm, the availability of digital data provides an opportunity to study society and human behavior. I’m interested in utilizing these online data, especially in social media, to analyze and understand complex online social phenomena. Even in Thailand, many social movements were originated from the online realm. [<a className="custom_anchor" href="https://www.coindesk.com/markets/2020/08/26/how-the-battle-for-thailand-is-being-fought-on-twitter/" target="_blank">news1</a>] [<a className="custom_anchor" href="https://asia.nikkei.com/Politics/Turbulent-Thailand/Twitter-bans-926-accounts-linked-to-Thai-military-manipulation" target="_blank">news2</a>]</div>
            </FadeInDiv>

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
