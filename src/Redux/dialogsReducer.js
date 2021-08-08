const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 4, message: body})
            state.newMessageBody = '';
            return state;
        default:
            return state
    }
}

export const sendMessageAC = () =>
    ({
        type: SEND_MESSAGE
    })

export const updateNewMessageBodyAC = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body,
    })

export default dialogsReducer;