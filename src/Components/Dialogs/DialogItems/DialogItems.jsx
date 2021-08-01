import  css from './DialogItems.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogItems = (props) => {
  return (
      <section className={css.dialogItems}>
          <DialogItem name={props.name} id={props.id}/>
      </section>
  )
}

export default DialogItems;
