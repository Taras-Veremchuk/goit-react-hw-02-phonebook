import React from "react";
import PropTypes from 'prop-types';


const ContactList = ({ visibleContacts, deleteContact }) => {

  return(
        <ul>{visibleContacts.map(({id, name, number}) =>
          <li key={id} >{name}: {number} <button onClick={()=>deleteContact(id)} id={id} type="button">delete</button></li>
        )}</ul>)
}
export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array ,
  deleteContact:PropTypes.func,
}
