import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";

let socket;

const Chat = () => {
  const [userName, setUserName] = useState("");
  const [userRoom, setUserRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:8080";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setUserName(name);
    setUserRoom(room);
    const data = {
      name,
      room,
    };

    socket = io(ENDPOINT);
    socket.emit("join", data);

    return () => {
      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (msg) => {
    socket.emit("sendMessage", msg);
  };

  return (
    <main className="bg-gray-900 h-screen">
      <div className="container flex justify-center items-center">
        <div className="mt-20 relative" style={{ width: "80%" }}>
          <InfoBar room={userRoom} />
          <div className="bg-gray-900 border-2 border-purple-800 rounded-b-md h-72  p-5">
            <Messages messages={messages} userName={userName} />
          </div>
          <Input sendMessage={sendMessage} />
        </div>
      </div>
    </main>
  );
};

export default Chat;
