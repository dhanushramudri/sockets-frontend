import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";

function App() {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [proceed, setProceed] = useState(false);

  let data = {
    name,
    roomName,
  };

  const submitHandler = (e) => {
    if (data.name === "") {
      alert("Please enter a valid name");
    } else if (data.roomName === "") {
      alert("Please enter a valid room name");
    } else {
      alert("Welcome to the chat room");
      setProceed(true);
      console.log(data);
    }
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1>Simple Chat Room</h1>
      </header>
      {!proceed && (
        <form action="submit" onSubmit={submitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="room">Room: </label>
          <input
            type="text"
            id="room"
            placeholder="Enter room name"
            onChange={(e) => setRoomName(e.target.value)}
          />
          <button type="submit">Entr</button>
        </form>
      )}
      {proceed && <ChatRoom />}
    </div>
  );
}

export default App;
