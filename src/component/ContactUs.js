import { useState } from "react";
import UserOffline from "./UserOffline";
import useOnline from "../Hooks/useOnline";

// ContactUs component for displaying contact form
const ContactUs = () => {
  const [message, setMessage] = useState(false); // State for displaying message after submission

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

   // Check if user is online
 const isOnline = useOnline();

  // If user is offline, display UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return (
    <div className="contact-container">
      <div className="contact">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {/* Displaying message after submission */}
          {message && (
            <span>
              Thanks for contacting TestyGoodFood, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs; // Exporting ContactUs component as default
