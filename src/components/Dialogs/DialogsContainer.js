import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from '.'
import {connect} from 'react-redux'


let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessage :()=>{
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody :(body)=>{
            dispatch(updateNewMessageBodyCreator(body));  
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer