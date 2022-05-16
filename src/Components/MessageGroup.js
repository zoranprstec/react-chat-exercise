import Message from "./Message";

const MessageGroup = ({ mainMessage, childMessages }) => {
  return (
    <>
      <Message message={mainMessage} replyCount={childMessages.length} />
      {childMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </>
  );
};

export default MessageGroup;
