import './App.css';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';

function App() {
  const loading = useSelector(state => state.contacts.loading);
  // console.log(loading);
  return (
    <div className="main-container">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Loader isLoading={loading} />
    </div>
  );
}

export default App;
