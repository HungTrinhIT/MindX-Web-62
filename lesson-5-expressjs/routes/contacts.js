const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let contacts = [
  {
    id: "a8fa5bee-cb01-4fb0-8465-e8b820567000",
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: "770f7bd7-f960-4a9f-be40-67621e415bb6",
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: "f53cc6d7-86f5-460a-9c2c-bbadc0450507",
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

// GET: get all contacts
router.get("/", (req, res) => {
  res.json({
    data: contacts,
    statusCode: 200,
  });
});

// GET: get a contact
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return res.json({
      msg: "Contact is not exist",
      data: {},
    });
  }

  res.json({
    data: contact,
    msg: "Successfully",
  });
});

// POST: create new contact
router.post("/", (req, res) => {
  const { name, phone, type, email } = req.body;

  // 1. Validation
  if (!name || !phone || !type || !email) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  // 2. Does this record exist in DB?
  const isExist = contacts.findIndex((contact) => contact.phone === phone);
  if (isExist !== -1) {
    return res.json({
      msg: "Can not upload contact with this number",
      statusCode: 400,
    });
  }

  const newContact = {
    ...req.body,
    id: uuidv4(),
  };
  contacts.push(newContact);

  res.status(201).json({
    msg: "Add new contact successfully",
    data: contacts,
  });
});

// PUT: update a contact
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, phone, type } = req.body;

  //1. Check is exist id?
  const contactIdx = contacts.findIndex((contact) => contact.id === id);
  if (contactIdx === -1) {
    return res.json({
      msg: "Can not find this resource",
      statusCode: 400,
    });
  }

  //2. Validation
  if (!name || !email || !phone || !type) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  contacts[contactIdx] = {
    id,
    name,
    email,
    phone,
    type,
  };

  res.json({
    data: contacts,
    msg: "Successfully",
  });
});

// DELETE: delete a contact
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //1. Check is exist id?
  const contactIdx = contacts.findIndex((contact) => contact.id === id);
  if (contactIdx === -1) {
    return res.json({
      msg: "Can not find this resource",
      statusCode: 400,
    });
  }

  const deletedContacts = contacts.filter((contact) => contact.id !== id);
  contacts = deletedContacts;

  res.json({
    msg: "Delete successfully",
    data: contacts,
  });
});

module.exports = router;
