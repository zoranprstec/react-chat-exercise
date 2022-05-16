import { useState } from "react";

import MessageGroup from "./Components/MessageGroup";
import initialMessages from "./ChatData/messages.json";

export default function App() {
  const [messages, setMessages] = useState(initialMessages.data.comments);
  const [newMessageValue, setNewMessageValue] = useState("");

  const handleChange = (e) => {
    setNewMessageValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessageValue.length > 0) {
      const newMessages = messages.concat({
        id: String(Math.random()),
        author: {
          name: "Zmaj Sipovski",
          picture: "img/zmaj.jpg",
        },
        text: newMessageValue,
        timestamp: Date.now(),
      });

      setMessages(newMessages);
      setNewMessageValue("");
    }
  };

  return (
    <div>
      {messages
        .filter((message) => !message.parent_id)
        .map((mainMessage) => (
          <MessageGroup
            key={mainMessage.id}
            mainMessage={mainMessage}
            childMessages={messages.filter(
              (msg) => msg.parent_id === mainMessage.id
            )}
          />
        ))}
      <form onSubmit={handleSubmit} className="form">
        <button type="button" className="form--plus-button">
          <div className="cross"></div>
        </button>
        <input
          className="form--input"
          type="text"
          value={newMessageValue}
          onChange={handleChange}
        />
        <button type="submit" className="form--submit">
          Send message
        </button>
      </form>
    </div>
  );
}
