export default function MessageBubble(props) {
    // const msgClass = `msg--img-body ${props.properties.parent_id && "msg--img-body-child"}`
    const msgClass = props.properties.parent_id ? "msg--img-body-child" : "msg--img-body"

    return (
        <div className={msgClass}>
            <img className="msg--img" alt="img" src={props.properties.author.picture} />
            <div className="msg--body">
                <div className="msg--bubble">
                    <h4>{props.properties.author.name}</h4>
                    <p>{props.properties.text}</p>
                </div>
                <span className="msg--time-sent">{props.date} | <a className="msg--reply">reply()</a></span>
            </div>
        </div>
    )
}