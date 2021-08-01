import css from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import NewMessage from "./NewMessage/NewMessage";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItems
        name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Messages
        message={message.message}/>);

    return (
        <section className={css.dialogs}>
            <section className={css.dialogsItems}>
                {dialogsElements}
            </section>
            <section className={css.messages}>
                {messagesElements}
                <NewMessage dispatch={props.dispatch} />
            </section>
        </section>
    )
}

export default Dialogs;