import "./chat-page.css";

const ChatItem = ({ id }) => {
  return (
    <div className={id === 1 ? "chat-head-active" : "chat-head-inactive"}>
      <img className="chat-img" src="https://i.pravatar.cc/300" />
      <div className="chat-text-div">
        <p className="chat-user">Kuldeep Vyas</p>
        <p>What is the publication year of the book?</p>
      </div>
    </div>
  );
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const ChatPage = () => {
  return (
    <div className="chat-div">
      <div className="chat-flex">
        {arr.map((it) => (
          <ChatItem id={it} />
        ))}
      </div>
      <div className="chat-flex-2">
      <ChatItem id={7}/>
        <div className="chat-box-flex">            
          <input
            className="chat-box"
            type={"text"}
            placeholder="Write your message here..."
          />
          <i className="fas fa-paper-plane chat-send"></i>
        </div>
      </div>
    </div>
  );
};

export { ChatPage };
