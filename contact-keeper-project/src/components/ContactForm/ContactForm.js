import React, { useState } from "react";
import { PERSONAL, PROFESSIONAL } from "../../configs/constants";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  type: PERSONAL,
};

const ContactForm = (props) => {
  // Props
  const { onAddContact } = props;

  // State & hooks
  const [contactForm, setContactForm] = useState(initialValues);

  // Functions
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddContact(contactForm);
    setContactForm(initialValues);
  };

  const { name, email, phone, type } = contactForm;
  const isDisabledSubmitButton = !name && !email && !phone;

  return (
    <div className="contact-form-container">
      <h4 className="text-center">Add contact</h4>
      <form onSubmit={onSubmitHandler} action="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Fullname
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3 ">
          <div>
            <p>Contact types</p>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="type"
                  id="personalType"
                  checked={type === PERSONAL}
                  onChange={onChangeHandler}
                  value={PERSONAL}
                />
                <label className="form-check-label" htmlFor="personalType">
                  Personal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="professionalType"
                  checked={type === PROFESSIONAL}
                  onChange={onChangeHandler}
                  value={PROFESSIONAL}
                />
                <label className="form-check-label" htmlFor="professionalType">
                  Professional
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isDisabledSubmitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
