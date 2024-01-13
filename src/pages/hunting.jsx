import React, { useState } from "react";
import axios from "axios";
import "./hunting.css";

function Hunting() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedRod, setSelectedRod] = useState(null);

  const handleEmailChange = (e) => {
    setRecipientEmail(e.target.value);
  };

  const handleSendEmail = async () => {
    if (selectedRod === null) {
      alert("Please choose a trap before sending the email!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/send_email",
        {
          recipientEmail,
          selectedRod,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setApiResponse(response.data);

      setTimeout(() => {
        setRecipientEmail("");
        setApiResponse(null);
        setSelectedRod(null);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleRodClick = (index) => {
    setSelectedRod(index === selectedRod ? null : index);
  };

  return (
    <div>
      <div className="email-sender-container">
        <label>
          Target mail:
          <input
            type="email"
            value={recipientEmail}
            onChange={handleEmailChange}
          />
        </label>

        <button onClick={handleSendEmail}>Phish</button>

        {apiResponse && (
          <div className="api-response">
            <p>
              Status: {apiResponse.status}! {apiResponse.message}
            </p>
          </div>
        )}
      </div>

      <h1 className="trapTitle">Choose how to phish the target:</h1>

      <div className="rods">
        <img
          className={`rodsImg ${selectedRod === 0 ? "selected" : ""}`}
          src="https://freelogopng.com/images/all_img/1658030214facebook-logo-hd.png"
          alt=""
          onClick={() => handleRodClick(0)}
        />

        <img
          className={`rodsImg ${selectedRod === 1 ? "selected" : ""}`}
          src="https://freelogopng.com/images/all_img/1690643777twitter-x%20logo-png-white.png"
          alt=""
          onClick={() => handleRodClick(1)}
        />

        <img
          className={`rodsImg ${selectedRod === 2 ? "selected" : ""}`}
          src="https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png"
          alt=""
          onClick={() => handleRodClick(2)}
        />

        <img
          className={`rodsImg ${selectedRod === 3 ? "selected" : ""}`}
          src="https://freelogopng.com/images/all_img/1688364563amazon-app-logo-png.png"
          alt=""
          onClick={() => handleRodClick(3)}
        />
      </div>
    </div>
  );
}

export default Hunting;
