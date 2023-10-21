import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, getRandomMessage } from '../utils/helper';
import { useSelector, useDispatch } from "react-redux";
import {VscSend} from "react-icons/vsc"

const LiveChat = () => {

  const [showChat, setShowChat] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);
  //API polling : will poll  at every 2 sec

  useEffect(() => {

    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        text: getRandomMessage(Math.floor(Math.random() * 50) + 1)
      }))
    }, 1500);

    return () => {
      clearInterval(i);
    }
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addMessage({name: "Utkarsh", text: enteredMessage}));
    setEnteredMessage("");
  }

  return (
    <div
      className={`col-span-12 lg:col-span-4 border-2 border-neutral-800 rounded-lg sm:ms-4 ${
        !showChat ? "h-fit" : "h-[80vh]"
      }`}
    >
      {showChat && <div className="border-b-2 border-neutral-800 px-4 py-2 font-medium">Live chat</div>}

      {showChat && <ul className="h-4/5 overflow-y-scroll scroll-smooth">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} name={message.name} text={message.text} />
        ))}
      </ul>}

      {showChat && <form
        className="flex border-t-2 border-neutral-800"
        onSubmit={formSubmitHandler}
      >
        <input
          type="text"
          placeholder="Chat..."
          className="grow text-sm px-4 py-2 bg-inherit border-b-2 border-neutral-800 focus:outline-none focus:border-blue-500"
          value={enteredMessage}
          onChange={(e) => setEnteredMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-lg text-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
        >
          <VscSend />
        </button>
      </form>}

      <button
        className="w-full text-sm py-1 my-1 font-semibold rounded-full hover:bg-neutral-800"
        onClick={() => {
          setShowChat((prev) => !prev);
        }}
      >
        {showChat ? "Hide chat" : "Show chat"}
      </button>
    </div>
  );
}

export default LiveChat