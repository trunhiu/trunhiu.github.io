import React from "react";
import Banner from "./Banner";
import "./contact.css";
import EmailContact from "./Emailcontact";
import FormContact from "./Formcontact";
import Instagram from "./Instagram";

const Contact = () => {
  return (
    <>
      <Banner />
      <FormContact />
      <EmailContact />
      <Instagram />
    </>
  );
};

export default Contact;
