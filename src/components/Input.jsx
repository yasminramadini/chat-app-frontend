import React, { useRef } from "react";

const Input = ({ sendMessage }) => {
  const inputRef = useRef();

  return (
    <div className="flex w-full absolute bottom-0">
      <input
        className="px-3 py-4 grow-1 w-full text-dark outline-none"
        placeholder="Enter your message"
        ref={inputRef}
      />
      <button
        className="bg-purple-800 p-4 border-none text-white"
        onClick={() => {
          sendMessage(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Input;
