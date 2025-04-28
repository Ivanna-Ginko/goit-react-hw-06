import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm'


const localTag = 'dz_react_3'

function App() {
  const [contacts, setContacts] = useState (()=>{
    let data = localStorage.getItem(localTag)
      
    if (data) return JSON.parse(data);
    
      return [
      /*{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},*/
      ]
  })
  const [filter, setFilter] = useState('')

  const addContact = (newContact) => {
    setContacts((prevContact)=>{
      return [...prevContact, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prevContact)=>{
     return prevContact.filter((contact) => contact.id !== contactId)
    })
  }

  const availableContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect (() => {
    localStorage.setItem(localTag, JSON.stringify(contacts))
  },[contacts])
   
  return(
  <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd = {addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList 
      contacts = {availableContacts} 
      onDelete = {deleteContact}
  />
</div>
 )
}

export default App
