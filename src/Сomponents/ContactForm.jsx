import React from "react";

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const filteredName = this.props.contacts.filter(contact => contact.name.includes(this.state.name))
    if (filteredName.length > 0) {
      alert(`${filteredName[0].name} is already in contacts.`)
      this.reset()
      return
    }
    else {
      this.props.addContact(this.state)
      this.reset()
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  reset = () => {
    this.setState({ name: "", number: "" })
  }


  render() {
    const { name, number } = this.state
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Name <input value={name} onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></label>

        <br />
        <label >Number<input value={number} onChange={this.handleChange} name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    )
  }
}
export default ContactForm;
