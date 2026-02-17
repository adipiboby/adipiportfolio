import React, { useState } from "react";
import "../src/components/Contact.css";
export default function Contact() {
  const [email, setEmail] = useState("");
  function emailfun(e) {
    console.log("hii");
  }
  return (
    <div className="Contactpage">
      <h1 id="contactheading">Contact</h1>
      <h3 id="contactintro">Feel free to reach out to me anything!</h3>

      <div className="contactdiv">
        <h1 id="emailme">Email Me 🚀</h1>

        <form id="inputdiv">
          <input
            placeholder="Your Email"
            value={email}
            type="text"
            onChange={emailfun}
            id="email"
          ></input>
          <input placeholder="Your Name" id="contactName"></input>
          <input placeholder="Message" id="message"></input>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
