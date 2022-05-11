import ChildMessage from "./ChildMessage"
import MessageBubble from "./MessageBubble"

export default function Message(props) {
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
    }

    const localDate = new Date(timestamp).toLocaleString("HR-hr", { day: "numeric", month: "numeric", year: "numeric" })
    const fullDate = localDate.replace(/ /g, "")
    const msgClass = props.properties.parent_id ? "msg--child" : "msg"

    return (
        <div className={msgClass}>
            {!props.properties.parent_id && <p className="msg--date">{`${day}, ${fullDate}`}</p>}
            <MessageBubble
                properties={props.properties}
                date={date}
            />
        </div>
    )
}