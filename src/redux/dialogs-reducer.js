const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

    dialogs: [
        { id: 1, name: 'Gogi1' },
        { id: 2, name: 'Gogi2' },
        { id: 3, name: 'Gogi3' },
        { id: 4, name: 'Gogi4' },
        { id: 5, name: 'Gogi5' }
    ],

    messages: [
        { id: 1, message: 'Hi1' },
        { id: 2, message: 'Hi2' },
        { id: 3, message: 'Hi3' },
        { id: 4, message: 'Hi4' },
        { id: 5, message: 'Hi5' },
    ],
    newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:action.body
            }
          
        case SEND_MESSAGE:
            let body = state.newMessageBody
           return {
                ...state,
                newMessageBody : '',
                messages: [...state.messages,{ id: 6, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer