import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem'
import Message from './Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    const newDialogs = state.dialogs.map(elem => <DialogItem id={elem.id} name={elem.name} key = {elem.id}/>);
    const newMessage = state.messages.map(elem => <Message key={elem.id} message={elem.message} />);
    let newMessagesBody = state.newMessagesBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialogs}
            </div>
            <div className={s.dialogsItems}>
                <div>
                    {newMessage}
                </div>
                <div style={{ display: 'flex' }}>
                    <textarea value={newMessagesBody}
                        onChange={onNewMessageChange} />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs