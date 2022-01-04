import React from "react"
import Landing from "./landing"
import Research from "./research"
import Experience from "./experience"
import Education from "./education"
import Project from "./project"
import {Layout, Col, Row, Space} from 'antd';
import {MailIcon, LinkedInIcon, InstagramIcon, GoodReadsIcon, GithubIcon} from "../common/icons";
import {LinkIcon} from "../common/linkicons";

const {Header, Content, Footer, Sider} = Layout;

const Homepage = () => {
    return (
        <div>
            <Landing />
            <Experience />
            <Education />
            <Research />
            <Project />

            <div style={{textAlign: 'center', color: "#ddd", backgroundColor: " #1C1D21", paddingTop: "70px"}}>
                <Row style={{paddingTop: "15px", paddingBottom: "15px"}}>
                    <Col span={12}>
                        By Teerapat Chaiwachirasak ©2022 with React.js (Ant UI)
                    </Col>
                    <Col span={12}>
                        <Space size={20}>
                            <LinkIcon style={{fontSize: "20px"}} component={LinkedInIcon} href="https://www.linkedin.com/in/teerapat-chaiwachirasak-876373134" />
                            <LinkIcon style={{fontSize: "20px"}} component={GithubIcon} href="https://github.com/teerapat-ch" />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Homepage
