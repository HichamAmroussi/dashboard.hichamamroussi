interface MessageProps {
  message: {
    _id: number;
    name: string;
    email: string;
    message: string;
    createdAt: string;
  };
  messages: {
    _id: number;
    name: string;
    email: string;
    message: string;
    createdAt: string;
  }[];
  setMessages: (
    item: {
      _id: number;
      name: string;
      email: string;
      message: string;
      createdAt: string;
    }[]
  ) => void;
}

function MessageCard({ message, messages, setMessages }: MessageProps) {
  // Event Handlers
  const deleteMessage = () => {
    fetch(`https://ha-portfolio-api.cyclic.app/inbox/${message._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const newMessagesArr = messages.filter(
          (item) => item._id !== message._id
        );

        // Set the new State
        setMessages(newMessagesArr);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="message-container">
      <div>
        <span>Name:</span> <p>{message.name}</p>
      </div>
      <div>
        <span>Contact:</span> <p>{message.email}</p>
      </div>
      <div>
        <span>Message:</span> <p>{message.message}</p>
      </div>

      <p className="posted-date">
        {message.createdAt.slice(0, -8).replace(/-/g, "/").replace("T", " at ")}
      </p>

      <button className="delete-msg" onClick={deleteMessage}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default MessageCard;
