import React from "react";
import Homepage from "../components/homepage";
import { Helmet } from "react-helmet";
import "antd/dist/antd.css";
import "../styles.less";
import "../styles.css";
import { Spin } from "antd";
//
// markup
class IndexPage extends React.Component {
  state = {
    didMount: false,
  };

  componentDidMount() {
    this.setState({ didMount: true });
  }

  render() {
    return (
      <Spin spinning={!this.state.didMount} delay={1000} size="large">
        <Helmet>
          <script type="application/ld+json">
            {`
        {
          "@type": "Personal Website",
          "url": "https://teerapat-ch.github.io/",
          "name": "Teerapat Chaiwachirasak",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-647-861-2312",
            "contactType": "Personal contact number"
          }
        }
      `}
          </script>
          <title>Teerapat Chaiwachirasak</title>
        </Helmet>
        <Homepage />
      </Spin>
    );
  }
}

export default IndexPage;
