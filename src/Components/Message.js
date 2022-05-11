import ChildMessage from "./ChildMessage"

export default function Message(props) {
    const timestamp = props.timestamp
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

    return (
        <div className="msg">
            <p className="msg--date">{`${day}, ${fullDate}`}</p>
            <div className="msg--img-body">
                <img className="msg--img" alt="img" src={props.author.picture} />
                <div className="msg--body">
                    <div className="msg--bubble">
                        <h4>{props.author.name}</h4>
                        <p>{props.text}</p>
                    </div>
                    <span className="msg--time-sent">{date} | <a className="msg--reply">reply()</a></span>
                </div>
            </div>
            <ChildMessage />
        </div>
    )
}