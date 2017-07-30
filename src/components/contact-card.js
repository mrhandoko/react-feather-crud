import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

const ContactCard = ({ contact, deleteContact }) =>
  <Card>
    <Card.Content>
      <Card.Header>
        <Icon name='user outline' />
        {contact.name.first} {contact.name.last}
      </Card.Header>
      <Card.Description>
        <p><Icon name='phone' />{ contact.phone }</p>
        <p><Icon name='mail outline' />{ contact.email }</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div class="ui two buttons">
        <Button basic color="green">Edit</Button>
        <Button basic color="red">Delete</Button>
      </div>
    </Card.Content>
  </Card>

export default ContactCard;
