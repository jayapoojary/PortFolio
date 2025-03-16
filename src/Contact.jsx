import React, {useState} from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=9902353097&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p>Email: <a href="mailto:jayapoojary862@gmail.com" className="contact-link">jayapoojary862@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jay-poojary-359000b6/" className="contact-link">My LinkedIn</a></p>
      <textarea 
        className="contact-textarea" 
        placeholder="Type your message here..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="contact-button" onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Contact;