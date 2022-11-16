import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message, userName }) => {
  return message.user !== userName ? (
    <div
      className="bg-gray-700 mt-4 text-white p-3 rounded-md w-48 message"
    >
      <p className="font-bold">{message.user}</p>
      <p className="mt-2">{ReactEmoji.emojify(message.message)}</p>
    </div>
  ) : (
    <div
      className="bg-purple-700 mt-4 text-white p-3 rounded-md ml-auto message"
    >
      <p className="font-bold">{message.user}</p>
      <p className="mt-4">{ReactEmoji.emojify(message.message)}</p>
    </div>
  );
};

export default Message;
