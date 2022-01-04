import React from "react"
import {Row, Col, Space, Timeline} from "antd"
import {Section3} from "../common/components"
import {TimelineItem} from "../common/timeline"
import workexps from '../data/workexp'


const Experience = () => {

    return (
        <Section3 title="Experience">
            <Timeline mode={"left"}>
                {workexps.map((item) => TimelineItem(item))}
                <Timeline.Item dot={<div />} />
            </Timeline>
        </Section3>
    )
}

export default Experience
