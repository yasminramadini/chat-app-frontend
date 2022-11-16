import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <main className="bg-gray-900 h-screen text-white">
      <div className="container flex justify-center items-center">
        <div className="border-2 border-purple-500 mt-10 p-10 rounded-lg">
          <h1 className="text-center text-3xl mb-12">Join Chat Room</h1>
          <input
            type="text"
            className="block bg-gray-700 p-3 rounded w-full outline-none focus:border-purple-500 border-2 border-gray-500 mt-5"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="block bg-gray-700 p-3 rounded w-full outline-none focus:border-purple-500 border-2 border-gray-500 mt-5"
            placeholder="Enter your chat room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            className="block rounded bg-purple-700 hover:bg-purple-800 p-3 mt-10 text-center border-0"
          >
            Join room
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Join;
