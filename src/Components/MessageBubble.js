import { useEffect } from "react"

export default function MessageBubble(props) {
    const isChild = props.properties.parent_id
    const msgClass = isChild ? "msg--img-body-child" : "msg--img-body"


    useEffect(() => {
        isChild && props.setReplyCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div className={msgClass}>
            <img className="msg--img" alt="img" src={props.properties.author.picture} />
            <div className="msg--body">
                <div className="msg--bubble">
                    <h4>{props.properties.author.name}</h4>
                    <p>{props.properties.text}</p>
                </div>
                <span className="msg--time-sent">{props.date} | <span className="msg--reply">Reply {!isChild && props.replyCount > 0 && `(${props.replyCount})`}</span></span>
            </div>
        </div>
    )
}