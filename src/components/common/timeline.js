import React from 'react';
import { Row, Col, Timeline, Space, Typography } from 'antd';
import {FadeInDiv} from "../common/components";
const { Title, Text, Paragraph } = Typography;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

function formatString(date) {
    if (date == null || date.size === 0) {
    return "Present"
  }

  const month = date.getMonth()
  const year = date.getFullYear()

  return `${months[month]} ${year}`

}

function monthDiff(startDate, endDate) {
  var endDate_ = endDate
  if (endDate == null || endDate.size === 0) {
    endDate_ = new Date()
  }
  const secondsInMonth = (86400000*30)

  const dayDuration = Math.ceil((endDate_ - startDate) / (secondsInMonth * 30))
  let monthDuration = Math.ceil((endDate_.setDate(1) - startDate.setDate(1)) / secondsInMonth)

  if(monthDuration <= 0) {
    return `${dayDuration} days`
  } else if (monthDuration >= 12) {
    return `${parseInt(monthDuration/12)} yrs ${monthDuration % 12} mos`

  } else if (monthDuration === 1) {
    return `${monthDuration} month`
  }
  return `${monthDuration} months`

}

const textStyle = {color: "#ddd"}

function TimelineItem(item) {
  const {title, company, details, startDate, endDate} = item
  const {name, icon, iconWidth} = company


  const TimeLabel = <div>
    <FadeInDiv direction="right"><Text strong={true} style={textStyle}>{formatString(startDate)} -</Text></FadeInDiv>
    <FadeInDiv direction="right"><Text strong={true} style={textStyle}>{formatString(endDate)}</Text></FadeInDiv>
    <FadeInDiv direction="right"><Text style={textStyle}>({monthDiff(startDate, endDate)})</Text></FadeInDiv>
  </div>

  return (
    <Timeline.Item label={TimeLabel} position='left' >
      <div style={{align: "Left"}}>
        <FadeInDiv direction="left">
          <Space direction="horizontal" style={{marginTop: "-30px"}}>
              {/*<img src={icon} width={iconWidth? iconWidth: "80px"}/>*/}
            <Title level={5} style={textStyle}>{title}, {name}</Title>
          </Space>
          <Paragraph>
            <ul style={textStyle}>
              {details.slice(0, 1).map((detail) => (<li>{detail}</li>) )}
            </ul>
          </Paragraph>
        </FadeInDiv>
      </div>
    </Timeline.Item>
  )
}

export {TimelineItem}
