import Message from "./Components/Message"
import messages from "./ChatData/messages.json"

export default function App() {
    const mess = messages.data.comments.map(message => {
        if(!message.parent_id) {
            return <Message 
                author={message.author}
                text={message.text}
                timestamp={message.timestamp}
            />
        }
    })

    return (
        <div>
            {mess}
            <form className="send-message-form">
                <input />
                <button>send</button>
            </form>
        </div>
    )
}