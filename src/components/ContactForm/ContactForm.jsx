import css from "./ContactForm.module.css"
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from 'yup'

const applySchema = Yup.object().shape({
name: Yup.string().min(3, 'Too short!').trim().max(50).required('required!'),
number: Yup.string().min(3, 'Too short!').trim().max(50).required('required!'),
})


export default function ContactForm ({ onAdd }) {

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, options) => {
    onAdd({...values, id: nanoid(),});
    options.formReset();
  }
    
    const initialValues = {
      id: nanoid(), 
      name: '', 
      number: ''
    }

    return (
      <Formik validationSchema={applySchema} onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label htmlFor={nameId}>
            <span className={css.label}>Name:</span>
            <Field className={css.input} type="text" name="name" id={nameId} />
            <ErrorMessage className={css.error} name="name" component='div'/>
          </label>
          <label htmlFor={numberId}>
            <span className={css.label}>Number:</span>
            <Field className={css.input} type="text" name="number" id={numberId}/>
            <ErrorMessage className={css.error} name="number" component='div'/>
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
      );
}