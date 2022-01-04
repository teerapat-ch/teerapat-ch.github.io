import React from "react"
import {Row, Col, Space} from "antd"
import {Section3} from "../common/components"

const AboutMe = () => {

    return (
        <Space direction="vertical" size={20}>

    <div>In my free time, I love doing Muay Thai and snowboarding. I also love playing chess, and Hearthstone. For relaxation, I do netflix</div>

        </Space>
    )
}

const Background = () => {

    return (
        <Section3 title={"About me"}>
            <AboutMe />
        </Section3>
    )
}

export default Background
