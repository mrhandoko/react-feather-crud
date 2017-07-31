import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';

const ContactList = ({ contacts, deleteContact }) =>
  <Card.Group>
    {
      contacts.map(contact =>
        <ContactCard
          key={contact._id}
          contact={contact}
          deleteContact={deleteContact}
        />
      )
    }
  </Card.Group>

export default ContactList;
