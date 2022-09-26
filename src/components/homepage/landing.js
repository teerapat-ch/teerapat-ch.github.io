import React from "react";
import { Title } from "../common/text";
import { Section, FadeInDiv } from "../common/components";
import { Row, Col, Space, Image, Button, Typography } from "antd";
import { GithubIcon, LinkedInIcon } from "../common/icons";
import { LinkIcon } from "../common/linkicons";
import {
  SearchOutlined,
  FileTextOutlined,
  DownloadOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { StaticImage } from "gatsby-plugin-image";

const { Text, Link } = Typography;

const CLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="custom_anchor">
      {children}
    </a>
  );
};

const ProfileLeft = () => {
  return (
    <FadeInDiv direction="fade">
      <Space size={50} direction="vertical">
        <Title style={{ marginTop: "20px" }}>Hi, I'm Ted!</Title>

        <div>
          I'm a graduate student in{" "}
          <CLink href="https://mscac.utoronto.ca/">
            Applied Computing (MScAC)
          </CLink>{" "}
          at the University of Toronto. I am doing my applied-research internship at <CLink href="https://www.crossingminds.com/company/about">Crossing Minds</CLink>, where I explore speeding-up hyperparameter optimization with meta-learning. Previously, I worked for 3 years at{" "}
          <CLink href="https://agoda.com">Agoda</CLink>, an online travel
          booking company, in the hotel ranking team as a data scientist/machine
          learning engineer. I did my bachelor at{" "}
          <CLink href="https://www.siit.tu.ac.th/">SIIT</CLink>, where I worked
          under{" "}
          <CLink href="https://scholar.google.com/citations?hl=en&user=HpDlacUAAAAJ&view_op=list_works&alert_preview_top_rm=2">
            Prof. Virach Sortlernlamvanich
          </CLink>{" "}
          in Thai natural language processing (NLP)
        </div>

        <Space size={30}>
          More details:
          <a
            //this will save the file as "your_cv.pdf"
            download="teerapat_resume.pdf"
            //put the path of your pdf file
            href="/static/teerapat_resume.pdf"
          >
            <LinkIcon
              component={FileTextOutlined}
              href="/static/teerapat_resume.pdf"
              tooltip="Resume"
            />
          </a>
          <LinkIcon
            component={LinkedinOutlined}
            href="https://www.linkedin.com/in/teerapat-chaiwachirasak-876373134"
            tooltip="LinkedIn"
          />
          <LinkIcon
            component={GithubOutlined}
            href="https://github.com/teerapat-ch"
            tooltip={"Github"}
          />
        </Space>
      </Space>
    </FadeInDiv>
  );
};

const ProfileRight = () => {
  return (
    <FadeInDiv direction="fade">
      <div style={{ textAlign: "center" }}>
        <Space direction="vertical" size={20}>
          <StaticImage
            height={"325px"}
            width={"325px"}
            src="https://media-exp1.licdn.com/dms/image/C5603AQEFJiGcrgraFw/profile-displayphoto-shrink_800_800/0/1642374627915?e=1669852800&v=beta&t=5eXwA38WcMZnZpwtU_nDrYkt-vV9EC5MGQkis5vVRKA"
            className="undraggable"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              height: "350px",
              width: "350px",
              // border: "5px solid #666",
              // boxShadow: "3px 3px 10px black"
            }}
          />
          <div>
            <div style={{ fontSize: "1.2em" }}>Teerapat Chaiwachirasak</div>
            <div style={{ fontSize: "0.6em", color: "#777" }}>
              ML Engineer | Data Scientist |  Full-stack developer
            </div>
            <div style={{ fontSize: "0.7em", color: "#eee" }}>
              University of Toronto (MScAC) 🇨🇦
            </div>
          </div>
        </Space>
      </div>
    </FadeInDiv>
  );
};

const Landing = () => {
  return (
    <Section>
      <div style={{ paddingTop: "200px", fontSize: "1.6em" }}>
        <Row>
          <Col
            lg={{ span: 8, offset: 2 }}
            md={{ span: 16, offset: 4 }}
            xs={{ span: 22, offset: 0 }}
          >
            <ProfileRight />
          </Col>
          <Col
            lg={{ span: 10, offset: 0 }}
            md={{ span: 16, offset: 4 }}
            xs={{ span: 22, offset: 0 }}
          >
            <ProfileLeft />
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default Landing;
