import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ContactForm from "./components/ContactForm";
import "./Contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeqnrvoz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section className="contact" id="contact">
      <div class="container">
        <ContactForm />
      </div>
    </section>
  );
}
