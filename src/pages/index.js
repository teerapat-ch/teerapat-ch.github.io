import React from "react"
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import "../styles.less"
import "../styles.css"
import Homepage from "../components/homepage/index"
import {Spin} from "antd";
//
// markup
class IndexPage extends React.Component {
    state = {
        didMount: false
    }

    componentDidMount() {
        this.setState({didMount: true})
    }

    render() {
        return (
            <Spin spinning={!this.state.didMount} delay={1000} size="large">
            <Helmet>
            <title>Teerapat Chaiwachirasak</title>
            </Helmet>
            <Homepage />
            </Spin>
        )
    }
}

export default IndexPage
