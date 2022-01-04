import React from "react"
import {Row, Col, Space, Timeline, Image, Card, Avatar, Divider} from "antd"
import {Section3} from "../common/components"
import {Subtitle, SubSubtitle} from "../common/text"
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import projects from "../data/project";
import {Slide} from "react-reveal";

const ProjectItem = ({title, desc, img}) => {
    return (
        <Slide right>
            <Row>
                <Col span={16}>
                    <Subtitle>{title}</Subtitle>
                    <SubSubtitle>{desc}</SubSubtitle>
                </Col>
                <Col span={8}>
                    <Image
                        preview={false}
                        height={"150px"}
                        width={"272px"}
                        src={img}
                        className="undraggable"
                        style={{
                            objectFit: "cover",
                            // border: "5px solid #666",
                            // boxShadow: "3px 3px 10px black"
                        }}
                    />
                </Col>
            </Row>
        </Slide>
    )
}

const Project = () => {

    return (
        <Section3 title="Project">
            <Space direction="vertical" size={20}>
                {projects.map((project, idx) => <ProjectItem {...project} />)}
            </Space>
        </Section3>
    )
}

export default Project
