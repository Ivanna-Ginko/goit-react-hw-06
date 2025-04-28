import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";

 function ContactList () {

  
    
    const contacts = useSelector(state => state.ContactList.contacts);


    return (
    <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>   
        ))}
     
    </ul>
  );
}

export default ContactList;