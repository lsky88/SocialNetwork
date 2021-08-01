import css from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {
  return (
      <section className={css.messages}>
          <Message message={props.message}/>
      </section>
  )
}

export default Messages;