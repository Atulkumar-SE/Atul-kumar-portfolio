import "./Form.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const [pending, setPending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);   

    emailjs
      .sendForm(
        "service_ookkk0g",
        "template_yt8g8og",
        form.current,
        "ccykwCdDz6h186jyY"
      )
      .then(
        (result) => {
            setPending(false)
          alert("we've received your message!");
          form.current.reset();
        },
        (error) => {
            setPending(false)
          alert("There is some error.");
          form.current.reset();
        }
      );
  };

  return (
    <>
      <div className="form_ctnr">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" required></input>
          <label htmlFor="">E-mail</label>
          <input type="email" name="email" required></input>
          <label htmlFor="">Subject</label>
          <input type="text" name="subject"></input>
          <label htmlFor="">Message</label>
          <textarea
            rows="5"
            placeholder="Type your message here."
            name="message"
            required
          />
          <button className="btn3" disabled={pending ? true : false} >{pending ? "Message Sending..." : "Send Message"}</button>
        </form>
      </div>
    </>
  );
};

export default Form;
