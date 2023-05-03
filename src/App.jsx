import React from "react";
import contactData from './Сomponents/ContactData'
import { ContactForm, ContactList, Filter } from "Сomponents/index";
import shortid from "shortid";


 class App extends React.Component{
  state = {
     filter: '',
  contacts: contactData,
  }
deleteContact = (id) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact=> contact.id!== id)
  }))
  }
    addContact = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name:name,
      number: number,
    }
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }
  changeFilter = (event) => {
    this.setState({ filter: event.target.value })
    this.filterContactList()
  }

  filterContactList = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim()
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
  render() {
    return (
      <div>
  <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={ this.state.contacts} />
 <h2>Contacts</h2>
        <Filter filter={ this.statefilter} onFilterChange={this.changeFilter} />
        <ContactList visibleContacts={this.filterContactList()} deleteContact={this.deleteContact} />

    </div>
  );}
};
export default App;
