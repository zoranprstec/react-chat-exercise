import Message from "./Components/Message"
import messages from "./ChatData/messages.json"

export default function App() {
    const mess = messages.data.comments.map(message => {
        const properties = {
            author: message.author,
            text: message.text,
            timestamp: message.timestamp,
            id: message.id,
            parent_id: message.parent_id || null
        }
        
        return <Message 
            properties={properties}
        />
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