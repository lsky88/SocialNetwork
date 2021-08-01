import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        },
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;