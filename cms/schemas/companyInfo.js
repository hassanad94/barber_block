export default {
  name: "companyInfo",
  title: "Cég Információ (hely, telefon, stb)",
  type: "document",
  fields: [
    {
      name: "location",
      title: "Cím",
      type: "string",
    },
    {
      name: "locationDetails",
      title: "Helyleírás",
      type: "text",
    },
    {
      name: "phone",
      title: "Telefonszám",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "email",
    },
  ],
};
