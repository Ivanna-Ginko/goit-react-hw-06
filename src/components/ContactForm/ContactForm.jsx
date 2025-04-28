import { nanoid } from "@reduxjs/toolkit";
import css from "./ContactForm.module.css"
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";



export default function ContactForm () {

  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    
    dispatch(addContact({
	    id: nanoid(),
	    name: form.elements.name.value,
      number: form.elements.namber.value,
	  }));
    form.reset();
  };
    

    return (
      <>
        <form onSubmit={handleSubmit} className={css.form}>
          <label htmlFor={nameId}>
            <span className={css.label}>Name:</span>
            <input className={css.input} type="text" name="name" id={nameId} />
          </label>
          <label htmlFor={numberId}>
            <span className={css.label}>Number:</span>
            <input className={css.input} type="text" name="number" id={numberId}/>
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      </>
      );
}