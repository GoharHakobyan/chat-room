import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', title: 'hello1' },
                { id: '2', title: 'hello2' },
                { id: '3', title: 'hello3' },
                { id: '4', title: 'hello4' },
                { id: '5', title: 'hello5' },
            ],
        },
        dialogsPage:{
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
        }, 
        sidebar:{},
        newPostText: '',
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _addPost() {
        let newPost = {
            id: 5,
            title: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {

        this._state.profilePage= profileReducer(this._state.profilePage,action)
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state)

    },

}


export default store
window.store = store