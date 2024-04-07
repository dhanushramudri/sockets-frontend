import React, { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";
import io from "socket.io-client";
import "./App.css";

const SOCKET_URL = "http://localhost:5000";

function App() {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [proceed, setProceed] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io.connect(SOCKET_URL, {
      transports: ["websocket"],
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "" || roomName.trim() === "") {
      alert("Please enter a valid name and room name");
    } else {
      alert("Welcome to the chat room");
      setProceed(true);
      socket.emit("join", {
        room: roomName,
        name: name,
      });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Simple Chat Room</h1>
      </header>
      {!proceed && (
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="room">Room:</label>
          <input
            type="text"
            id="room"
            placeholder="Enter room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      )}
      {proceed && <ChatRoom socket={socket} name={name} roomName={roomName} />}
    </div>
  );
}

export default App;
