import axiosInstance from "./axiosInstance";

const ContactService = {
  getAll: () => axiosInstance.get("/contacts"),
  getById: (id) => axiosInstance.get(`/contacts/${id}`),
  update: (id) => axiosInstance.put(),
  create: (contact) => axiosInstance.post("/contacts", contact),
};

export default ContactService;
