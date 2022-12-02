import React from "react";
import { PROFESSIONAL } from "../../configs/constants";

const ContactCard = (props) => {
  const { contact } = props;

  const { name, email, phone, type } = contact;
  const typeClassName =
    type === PROFESSIONAL ? "badge bg-danger" : "badge bg-success";
  return (
    <div>
      <div className="card mb-3" style={{ width: "80%" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{phone}</p>
          <p className={typeClassName}>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
