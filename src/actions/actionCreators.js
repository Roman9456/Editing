import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  EDIT_CANCEL,
  SAVE_CHANGES,
  SEARCH_SERVICE,
} from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function cancelEdit() {
  return { type: EDIT_CANCEL };
}

export function saveService(id, name, price) {
  return { type: SAVE_CHANGES, payload: { id, name, price } };
}

export function searchService(value) {
  return { type: SEARCH_SERVICE, payload: { value } };
}