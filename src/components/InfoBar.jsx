import React from "react";

const InfoBar = ({ room }) => {
  return (
    <header className="bg-purple-800 text-white px-4 py-3 flex justify-between rounded-t-md text-white">
      <h3 className="text-lg">{room}</h3>
      <a href="/">&times;</a>
    </header>
  );
};

export default InfoBar;
