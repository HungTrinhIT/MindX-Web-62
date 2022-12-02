import React, { useState } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import PageContainer from "../../components/PageContainer/PageContainer";
import ContactList from "../../components/ContactList/ContactList";

import ContactContext from "../../contexts/ContactContext/ContactContext";

import useFetchContacts from "../../hooks/useFetchContacts";
import ContactService from "../../services/contactServices";

const HomePage = () => {
  const { contacts, loading, error, setContactsData } = useFetchContacts();
  const [addContactError, setAddContactError] = useState(null);

  const onAddContact = async (contact) => {
    try {
      const response = await ContactService.create(contact);
      setContactsData(response.data.data);
    } catch (error) {
      setAddContactError(error.response.data);
      setTimeout(() => {
        setAddContactError(null);
      }, 2000);
    }
  };
  return (
    <PageContainer
      title="Contact Keeper | Help you to keep all contacts"
      description="Easy to use | The best app of the world"
    >
      <ContactContext.Provider
        value={{
          contacts,
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <ContactForm onAddContact={onAddContact} />
            {addContactError && (
              <p className="text-danger my-3 text-center">
                {addContactError.msg}
              </p>
            )}
          </div>
          <div className="col-12 col-md-6">
            <ContactList contacts={contacts} />
          </div>
        </div>
      </ContactContext.Provider>
    </PageContainer>
  );
};

export default HomePage;