import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ContactForm from "../../components/ContactForm";
import "./Contact.scss";

export default function Contact() {
  const contactFormRef = useRef(null);

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-75px 0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("inView");
    });
  }, options);

  useEffect(() => {
    if (contactFormRef.current) observer.observe(contactFormRef.current);

    return () => {
      if (contactFormRef.current) observer.unobserve(contactFormRef.current);
    };
  }, [contactFormRef.current, options]);

  return (
    <section className="contact" id="contact">
      <div class="container" ref={contactFormRef}>
        <ContactForm />
      </div>
    </section>
  );
}
