import { useEffect, useState } from "react";
// Import Components
import MessageCard from "../components/MessageCard";
import Button from "../components/Button";

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
    <main className="inbox-container">
      <Button
        title="Go Back"
        link="/home"
        style="go-back-btn"
        icone="fa-solid fa-circle-arrow-left"
      />
      {isPending && (
        <div className="loader-container">
          <div className="loading-animation"></div>
        </div>
      )}

      {messages &&
        messages.length !== 0 &&
        messages.map((message) => (
          <MessageCard
            message={message}
            messages={messages}
            setMessages={setMessages}
            key={message._id}
          />
        ))}

      {messages && messages.length === 0 && (
        <div className="empty-inbox">
          Inbox Empty <span>📭</span>
        </div>
      )}
    </main>
  );
}

export default Inbox;
