"use strict"
import React from 'react';
import { Button,Grid, Card, Icon, Image } from 'semantic-ui-react';
class PersonCard extends React.Component {
    render() {
        return (
        <Card>
            <Image src={this.props.images} />
            <Card.Content>
              <Card.Header>
                {this.props.title}
              </Card.Header>
              <Card.Description>
                {this.props.description}
              </Card.Description>
            </Card.Content>
          </Card>
        )
    }
}
export default PersonCard;