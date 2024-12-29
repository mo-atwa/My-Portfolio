import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("Send"); // State for button text
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading animation

    emailjs
      .sendForm("service_wgb32u6", "template_8q1aii8", form.current, {
        publicKey: "mqZItUjycJ_iSCpQL",
      })
      .then(
        () => {
          // On successful email sending
          setIsLoading(false); // Hide loading animation
          setStatus("Successfully"); // Update button text to success
          setTimeout(() => setStatus("Send"), 3000); // Reset button text after 3 seconds
        },
        (error) => {
          console.error("Failed to send email:", error);
          setIsLoading(false); // Hide loading animation even if there's an error
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="special-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`submit-btn ${status === "Successfully" ? "success" : ""}`}
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? <span className="loader"></span> : status}
        </button>
      </form>
    </section>
  );
};

export default Contact;
