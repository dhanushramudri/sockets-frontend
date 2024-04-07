import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");

  let data = {
    name,
    roomName,
  };

  const submitHandler = (e) => {
    if (data.name === "") {
      alert("please enter valid name");
    } else if (data.roomName === "") {
      alert("please enter valid room name");
    } else {
      alert("Welcome to the chat room");
      console.log(data);
    }
    e.preventDefault();
  };
  return (
    <div className="App">
      <header>
        <h1>Simple Chat Room</h1>
      </header>
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
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
