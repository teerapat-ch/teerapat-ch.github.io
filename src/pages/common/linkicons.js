import React from "react"
import Icon from '@ant-design/icons';

const LinkIcon = ({component, href, style}) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Icon
            component={component}
            style={
                hover ?
                    {cursor: "pointer", color: "#818181", fontSize: "1.2em", ...style} :
                    {color: "#515151", fontSize: "1.2em", ...style}
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => window.open(href, "_blank")}
        />

    )
}

export {LinkIcon}
