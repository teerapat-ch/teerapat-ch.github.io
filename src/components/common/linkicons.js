import React from "react"
import Icon from '@ant-design/icons';
import { Tooltip } from 'antd';

const LinkIcon = ({component, href, style, tooltip}) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Tooltip title={tooltip}>
        <a href={href} target="_blank">
        <Icon
            component={component}
            style={
                hover ?
                    {cursor: "pointer", color: "#eee", fontSize: "1.2em", ...style} :
                    {color: "#515151", fontSize: "1.2em", ...style}
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
        </a>
        </Tooltip>
    )
}

export {LinkIcon}
