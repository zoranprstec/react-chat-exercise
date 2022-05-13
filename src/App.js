import Message from "./Components/Message"
import messages from "./ChatData/messages.json"

export default function App() {
    const mess = messages.data.comments.map(message => {
        const childArray = []
        const properties = {
            author: message.author,
            text: message.text,
            timestamp: message.timestamp,
            id: message.id,
            parent_id: message.parent_id || null
        }
        
        if (!properties.parent_id) {
            const arr = []
            for (const el of messages.data.comments) {
                arr.push(el)
            }

            const messageIndex = arr.indexOf(message)

            for (let i = 1; i <= arr.length; i++) {
                if (arr[messageIndex + i] !== undefined && arr[messageIndex + i].parent_id) {
                    const { author, text, timestamp, id, parent_id } = arr[messageIndex + i]
                    const childProperties = {
                        author: author,
                        text: text,
                        timestamp: timestamp,
                        id: id,
                        parent_id: parent_id || null
                    }
                    childArray.push(childProperties)
                } else {
                    break
                }
            }

            return <Message 
                properties={properties}
                children={childArray}
            />
        }
    })

    return (
        <div>
            {mess}
            <form className="form">
                <button className="form--plus-button"><div className="cross"></div></button>
                <input className="form--input" type="text" />
                <button className="form--submit">Send message</button>
            </form>
        </div>
    )
}

