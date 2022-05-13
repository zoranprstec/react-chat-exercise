import { useState } from "react"
import MessageBubble from "./MessageBubble"

export default function Message(props) {
    const [replyCount, setReplyCount] = useState(0)
    const timestamp = props.properties.timestamp
    const dayNum = new Date(timestamp).getDay()
    const date = new Date(timestamp).toLocaleString(
        'en-US', { hour: 'numeric', minute: 'numeric', hour12: true }
    )

    let day = ""
    switch(dayNum) {
        case 0: {
            day = "Sunday"
            break;
        }
        case 1:{ 
            day = "Monday"
            break;
        }
        case 2:{ 
            day = "Tuesday"
            break;
        }
        case 3:{ 
            day = "Wednesday"
            break;
        }
        case 4:{ 
            day = "Thursday"
            break;
        }
        case 5:{ 
            day = "Friday"
            break;
        }
        case 6:{ 
            day = "Saturday"
            break;
        }
        default:{
            day = "n/a"
            break;
        }
    }

    const localDate = new Date(timestamp).toLocaleString("HR-hr", { day: "numeric", month: "numeric", year: "numeric" })
    const fullDate = localDate.replace(/ /g, "")

    
    const childMessages = props.children.map(element => {
        return <MessageBubble
            properties={{
                author: element.author,
                id: element.id,
                parent_id: element.parent_id,
                text: element.text,
                timestamp: element.timestamp
            }}
            date={date}
            setReplyCount={setReplyCount}
        />
    })

    return (
        <div className="msg">
            {!props.properties.parent_id && <p className="msg--date">{`${day}, ${fullDate}`}</p>}
            <MessageBubble
                properties={props.properties}
                date={date}
                replyCount={replyCount}
            />
            {childMessages}
        </div>
    )
}