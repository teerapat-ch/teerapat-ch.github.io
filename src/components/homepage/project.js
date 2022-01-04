import React from "react"
import {Row, Col, Space, Timeline, Image, Card, Avatar, Divider} from "antd"
import {Section3, FadeInDiv} from "../common/components"
import {Subtitle, SubSubtitle} from "../common/text"
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import projects from "../data/project";
import {StaticImage} from "gatsby-plugin-image"

const imageStyle = {
    objectFit: "cover",
    height: "150px",
    width: "272px",
    marginLeft: "15px",
    align: "center"
    // border: "5px solid #666",
    // boxShadow: "3px 3px 10px black"
}

const Project = () => {

    return (
        <Section3 title="Project">
            <Space direction="vertical" size={20}>

                <FadeInDiv direction="left">
                    <Row>
                        <Col lg={{span: 8, order: 2}} md={{span: 24, order: 1}}>
                            <StaticImage
                                alt="home_hackathon"
                                preview={false}
                                height={"150px"}
                                width={"272px"}
                                src="../../images/project_homehackathon.jpeg"
                                className="undraggable"
                                style={imageStyle}
                            />
                        </Col>
                        <Col lg={{span: 16, order: 1}} md={{span: 24, order: 2}}>
                            <Subtitle>{projects[0].title}</Subtitle>
                            <SubSubtitle>{projects[0].desc}</SubSubtitle>
                        </Col>
                    </Row>
                </FadeInDiv>

                <FadeInDiv direction="left">
                    <Row>
                        <Col lg={{span: 8, order: 2}} md={{span: 24, order: 1}}>
                            <StaticImage
                                alt="dtac project"
                                preview={false}
                                height={"150px"}
                                width={"272px"}
                                src="../../images/project_dtac.png"
                                className="undraggable"
                                style={imageStyle}
                            />
                        </Col>

                        <Col lg={{span: 16, order: 1}} md={{span: 24, order: 2}}>
                            <Subtitle>{projects[1].title}</Subtitle>
                            <SubSubtitle>{projects[1].desc}</SubSubtitle>
                        </Col>
                    </Row>
                </FadeInDiv>

                <FadeInDiv direction="left">
                    <Row>
                        <Col lg={{span: 8, order: 2}} md={{span: 24, order: 1}}>
                            <StaticImage
                                alt="siit project"
                                preview={false}
                                height={"150px"}
                                width={"272px"}
                                src="../../images/project_siit.png"
                                className="undraggable"
                                style={imageStyle}
                            />
                        </Col>
                        <Col lg={{span: 16, order: 1}} md={{span: 24, order: 2}}>
                            <Subtitle>{projects[2].title}</Subtitle>
                            <SubSubtitle>{projects[2].desc}</SubSubtitle>
                        </Col>
                    </Row>
                </FadeInDiv>


                <FadeInDiv direction="left">
                    <Row>
                        <Col lg={{span: 8, order: 2}} md={{span: 24, order: 1}}>
                            <StaticImage
                                alt="tutorth"
                                preview={false}
                                height={"150px"}
                                width={"272px"}
                                src="../../images/project_tutorth.png"
                                className="undraggable"
                                style={imageStyle}
                            />
                        </Col>

                        <Col lg={{span: 16, order: 1}} md={{span: 24, order: 2}}>
                            <Subtitle>{projects[3].title}</Subtitle>
                            <SubSubtitle>{projects[3].desc}</SubSubtitle>
                        </Col>
                    </Row>
                </FadeInDiv>

            </Space>



        </Section3>
    )
}

export default Project
