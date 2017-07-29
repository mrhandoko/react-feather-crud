import { contacts } from '../contacts-data';

export fetchContacts = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    });
  }
}
