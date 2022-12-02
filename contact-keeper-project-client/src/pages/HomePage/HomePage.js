import React, { useEffect, useState } from "react";
import ContactContext from "../../contexts/ContactContext/ContactContext";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageContainer from "../../components/PageContainer/PageContainer";
import useViewport from "../../hooks/useViewport";
import useFetchMovies from "../../hooks/useFetchMovies";
const contactData = [
  {
    id: 1,
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: 2,
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: 3,
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const { movies, loading, error } = useFetchMovies();
  const { isMobile } = useViewport();

  useEffect(() => {
    setContacts(contactData);
  }, []);
  const onAddContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
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
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </ContactContext.Provider>
    </PageContainer>
  );
};

export default HomePage;
