import { client } from './'

const url = '/contacts';

export const fetchContacts = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    });
  }
}

export const newContact = () => {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export const saveContact = contact => {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post(url, contact)
    })
  }
}
