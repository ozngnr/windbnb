import React from 'react';
import { Card } from '../components';
import staysData from '../stays.json'

const BrowseContainer = ({children, ...restProps}) => {
  return ( 
    <Card.Group {...restProps}>
      {
        staysData.map(stay => (
          <Card>
            <Card.Image src={stay.photo}/>
            <Card.Info>
              {stay.superHost && <Card.Super>SUPER HOST</Card.Super>}
              <Card.Text>{stay.type} . {stay.beds} beds</Card.Text>
              <Card.Rating>{stay.rating}</Card.Rating>
            </Card.Info>
            <Card.Title>{stay.title}</Card.Title>
          </Card>
        ))
      }
    </Card.Group>
   );
}
 
export default BrowseContainer;