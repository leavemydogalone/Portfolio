import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqnrvoz");
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h2 class="title">Contact Me</h2>
      <label htmlFor="name">Name</label>
      <input id="name" type="Name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
