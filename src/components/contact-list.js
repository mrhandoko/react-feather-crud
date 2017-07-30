import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';

const ContactList = ({ contacts }) =>
  <Card.Group>
    {
      contacts.map(contact => <ContactCard key={contact._id} contact={contact} />)
    }
  </Card.Group>

export default ContactList;
