import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // State variable to store messages
  const handleChange = (e) => {
    setMessage(e.target.value); // Update message state with input value
  };

  const sendHandler = () => {
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="chatroom">
      <div id="chat-container">
        <div id="message-container">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </div>
        <input
          type="text"
          id="message-input"
          placeholder="Type your message..."
          value={message}
          onChange={handleChange}
        />
        <button onClick={sendHandler}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
