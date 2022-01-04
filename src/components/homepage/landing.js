import React from "react"
import {Title} from "../common/text"
import {Section} from "../common/components"
import {Row, Col, Space, Image, Button, Typography} from 'antd';
import ProfileImg from '../../../public/images/profile_pic_lol.png';
import {MailIcon, GithubIcon, LinkedInIcon} from "../common/icons";
import {LinkIcon} from "../common/linkicons";
import {SearchOutlined, DownloadOutlined} from '@ant-design/icons';
import {Fade, Slide} from "react-reveal";

const {Text, Link} = Typography;

const CLink = ({href, children}) => {
    return (
        <a href={href} target="_blank" className="custom_anchor">{children}</a>
    )
}

const ProfileLeft = () => {
    return (
        <Fade>
            <Space size={50} direction="vertical">
                <Title>Hey there!</Title>
                <div>I'm Ted, a graduate student in <CLink href="https://mscac.utoronto.ca/">Applied Computing (MScAC)</CLink> at the University of Toronto. Previously, I worked for 3 years at <CLink href="https://agoda.com">Agoda</CLink>, an online travel booking company, in hotel ranking team as a data scientist/machine learning engineer. I did my bachelor in <CLink href="https://www.siit.tu.ac.th/">SIIT</CLink>, where I worked under <CLink href="https://scholar.google.com/citations?hl=en&user=HpDlacUAAAAJ&view_op=list_works&alert_preview_top_rm=2">Prof. Virach Sortlernlamvanich</CLink> in Thai natural language processing (NLP) lab. </div>

                <div>Currently looking for an applied research internship in natural language processing and/or recommendation systems.</div>

                <Row>
                    <Space size={20}>
                        More details:
                        <a
                            //this will save the file as "your_cv.pdf"
                            download="teerapat_resume.pdf"
                            //put the path of your pdf file
                            href="/static/teerapat_resume.pdf"

                        >
                            <Button icon={<DownloadOutlined />}>
                                Resume
                            </Button>
                        </a>

                        <LinkIcon component={LinkedInIcon} href="https://www.linkedin.com/in/teerapat-chaiwachirasak-876373134" />
                        <LinkIcon component={GithubIcon} href="https://github.com/teerapat-ch" />
                    </Space>
                </Row>
            </Space>
        </Fade>
    )
}

const ProfileRight = () => {
    return (
        <Fade>
            <div style={{textAlign: "center"}}>
                <Space direction="vertical" size={20}>
                    <Image
                        preview={false}
                        height={"350px"}
                        width={"350px"}
                        src={ProfileImg}
                        className="undraggable"
                        style={{
                            objectFit: "cover",
                            borderRadius: "50%",
                            // border: "5px solid #666",
                            // boxShadow: "3px 3px 10px black"
                        }}
                    />
                    <div>
                        <div style={{fontSize: "1.2em"}}>Teerapat Chaiwachirasak</div>
                        <div style={{fontSize: "0.6em", color: "#777"}}>Data Scientist | ML Engineer | Full-stack developer</div>
                        <div style={{fontSize: "0.7em", color: "#eee"}}>University of Toronto (MScAC) 🇨🇦</div>
                    </div>
                </Space>
            </div>
        </Fade>
    )
}

const Landing = () => {

    return (
        <Section>
            <div style={{paddingTop: "200px", fontSize: "1.6em"}}>
                <Row>
                    <Col span={8} offset={2}><ProfileRight /></Col>
                    <Col span={10}><ProfileLeft /></Col>
                </Row>
            </div>
        </Section>
    )
}

export default Landing
