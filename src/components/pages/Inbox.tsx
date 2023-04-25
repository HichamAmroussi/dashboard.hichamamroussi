import { useEffect, useState } from "react";
import MessageCard from "../MessageCard";

function Inbox() {
  const [messages, setMessages] = useState<any[] | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://ha-portfolio-api.cyclic.app/inbox")
      .then((data) => data.json())
      .then((response) => {
        // Remove Loading Animation
        setIsPending(false);
        // Change Messages State
        setMessages(response.messages);
      });
  }, []);

  return (
    <main>
      {isPending && (
        <div className="loader-container">
          <div className="loading-animation"></div>
        </div>
      )}

      {messages &&
        messages.map((message) => (
          <MessageCard
            message={message}
            messages={messages}
            setMessages={setMessages}
            key={message._id}
          />
        ))}
    </main>
  );
}

export default Inbox;
