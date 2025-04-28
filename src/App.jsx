import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm'
import { Provider } from 'react-redux'
import { store } from "./redux/store";



function App() {
  
  return(
  <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox/>
        <ContactList/>
        </div> 
  </Provider>
 )
}

export default App
