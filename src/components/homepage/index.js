import React from "react";
import Landing from "./landing";
import Research from "./research";
import Experience from "./experience";
import Education from "./education";
import Project from "./project";
import { Layout, Col, Row, Space } from "antd";
import {
  MailIcon,
  LinkedInIcon,
  InstagramIcon,
  GoodReadsIcon,
  GithubIcon,
} from "../common/icons";
import { LinkIcon } from "../common/linkicons";
import { FileTextOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const Homepage = () => {
  return (
    <div>
      <Landing />
      <Experience />
      <Education />
      <Research />
      <Project />

      <div
        style={{
          textAlign: "center",
          color: "#ddd",
          backgroundColor: " #1C1D21",
          paddingTop: "70px",
        }}
      >
        <Row style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <Col span={12}>
            By Teerapat Chaiwachirasak ©2022 with React.js [
            <a
              className="custom_anchor"
              href="https://github.com/teerapat-ch/teerapat-ch.github.io"
              target="_blank"
            >
              code
            </a>
            ]
          </Col>
          <Col span={12}>
            <Space size={20}>
              <LinkIcon
                style={{ fontSize: "20px" }}
                component={LinkedInIcon}
                href="https://www.linkedin.com/in/teerapat-chaiwachirasak-876373134"
                tooltip="LinkedIn"
              />
              <LinkIcon
                style={{ fontSize: "20px" }}
                component={GithubIcon}
                href="https://github.com/teerapat-ch"
                tooltip="Github"
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Homepage;
