const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 3},
                {id: 2, message: "Yo", likesCount: 12},
            ],

            newPostText: ' '
        },

        dialogsPage: {
            dialogs: [
                {name: "Ann", id: "1"},
                {name: "John", id: "2"},
                {name: "James", id: "3"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "What's up? "},
            ],
            newMessageBody: ' '
        }
    },

    _callSubscriber() {
        console.log('state is changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' '
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ' ';
            this._state.dialogsPage.messages.push({id: 3, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () =>
    ({
        type: ADD_POST
    })

export const updateNewPostTextAC = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT, newText: text,
    })


export const sendMessageAC = () =>
    ({
        type: SEND_MESSAGE
    })

export const updateNewMessageBodyAC = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body,
    })


export default store;
window.store = store;