import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = (props) => {
  const { contacts } = props;

  const contactElements = contacts?.map((contact) => (
    <ContactCard key={contact.id} contact={contact} />
  ));

  return (
    <div>
      <h4>List contacts</h4>
      {contactElements}
    </div>
  );
};

export default ContactList;
