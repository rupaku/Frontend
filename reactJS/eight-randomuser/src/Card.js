import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa"

const MyCard = ({ details }) => {
  console.log("details:::", details)
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-dander"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>.
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.cell}
          {details.location?.city}
          {details.dob?.age}
          {details.email}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default MyCard
