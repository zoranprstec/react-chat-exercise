export default function MessageBubble({ message, replyCount }) {
  const isChild = Boolean(message.parent_id);
  const msgClass = isChild ? "msg--img-body-child" : "msg--img-body";

  return (
    <div className={msgClass}>
      <img className="msg--img" alt="img" src={message.author.picture} />
      <div className="msg--body">
        <div className="msg--bubble">
          <h4>{message.author.name}</h4>
          <p>{message.text}</p>
        </div>
        <span className="msg--time-sent">
          {message.date} |{" "}
          <span className="msg--reply">
            Reply {!isChild && replyCount > 0 && `(${replyCount})`}
          </span>
        </span>
      </div>
    </div>
  );
}
