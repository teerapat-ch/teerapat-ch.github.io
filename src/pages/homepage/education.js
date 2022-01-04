import React from "react"
import {Row, Col, Space, Timeline} from "antd"
import {Section3} from "../common/components"
import {TimelineItem} from "../common/timeline"
import educations from '../data/education'


const Education = () => {

    return (
        <Section3 title="Education">
            <Timeline mode={"left"}>
                {educations.map((item) => TimelineItem(item))}
                <Timeline.Item dot={<div />} />
            </Timeline>
        </Section3>
    )
}

export default Education
