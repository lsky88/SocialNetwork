import React from "react";
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={sendMessage} dialogsPage={state}/>

}

export default DialogsContainer;