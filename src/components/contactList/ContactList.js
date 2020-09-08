import React from 'react';
import Style from './ContactListStyles.module.css';
import PropTypes from 'prop-types';


export default function ContactList({ findUser, deleteUser }) {
  return (
    <ul className={(Style.contact__list)}>
      {findUser().map(elem => 
        <li key={elem.id} className={(Style.contact__item)}>
          <p className={(Style.contact__style)}>
            {elem.name + ':'}
          </p>
          <p className={(Style.contact__style)}>
            {elem.number}
          </p>
          <button
            className={Style.deletebtn__style}
            type="button"
            onClick={() => deleteUser(elem.id)}
          >
            Delete
          </button>
        </li>
      )}
      </ul>
     
  );
}

ContactList.propTypes = {

  findUser: PropTypes.func,
  deleteUser: PropTypes.func,
};
