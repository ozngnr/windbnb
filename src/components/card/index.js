import React from 'react';
import {Container, Group, Title, Text, Rating, Image, Info, Super} from "./styles/card"

const Card = ({ children, ...restProps }) => {
  return ( <Container {...restProps} >{children}</Container> );
}
 
export default Card;

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps} >{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps} >{children}</Title>
}

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps} >{children}</Info>
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps} >{children}</Text>
}

Card.Rating = function CardRating({ children, ...restProps }) {
  return (
    <Rating {...restProps} >
      <span className="material-icons-round">star_rate</span>
      {children}
    </Rating>
  )
}
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />
}

Card.Super = function CardSuper({ children, ...restProps }) {
  return <Super {...restProps}>{children}</Super>
}