import React, { useState } from "react";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setShowEmail(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Contact</button>

      {showEmail && (
        <div>
          <p>
            My email: <a href="mailto:dorsaf@example.com">dorsaf@example.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
