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

      <input id="name" type="Name" name="name" placeholder="Name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input id="email" type="email" name="email" placeholder="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
