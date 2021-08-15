import React from "react";
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage

                let sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={sendMessage} dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;