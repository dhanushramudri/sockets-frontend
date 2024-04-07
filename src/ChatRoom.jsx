import React, { useState, useEffect } from "react";

const ChatRoom = ({ name, roomName, socket }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("notification", (notification) => {
      alert(notification);
    });

    return () => {
      socket.off("message");
      socket.off("notification");
    };
  }, [socket]);

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    socket.emit("messageRoom", {
      room: roomName,
      message: {
        sender: name,
        text: message,
      },
    });
    setMessage("");
  };

  return (
    <div className="chatroom">
      <p>
        Hi {name}, welcome to {roomName}!
      </p>
      <div id="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === name ? "message sender" : "message"}
          >
            <div className="message-sender">{msg.sender}</div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSend}>
        <input
          type="text"
          id="message-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
