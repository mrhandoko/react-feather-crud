import { client } from './';

const url = './contacts';

export const fetchContacts = () => (
  dispatch => dispatch({
    type: 'FETCH_CONTACTS',
    payload: client.get(url)
  })
)

export const newContact = contact => (
  dispatch => dispatch({
    type: 'SAVE_CONTACT',
    payload: client.post(url, contact)
  })
)

export const saveContact = contact => (
  dispatch => dispatch({
    type: 'SAVE_CONTACT',
    payload: client.post(url, contact)
  })
)

export const fetchContact = _id => (
  dispatch => dispatch({
    type: 'FETCH_CONTACT',
    payload: client.get(`${url}/${_id}`)
  })
)

export const updateContact = contact => (
  dispatch => dispatch({
    type: 'UPDATE_CONTACT',
    payload: client.put(`${url}/${contact._id}`)
  })
)

export const deleteContact = _id => (
  dispatch => ({
    type: 'DELETE_CONTACT',
    payload: client.delete(`${url}/${_id}`)
  })
)
