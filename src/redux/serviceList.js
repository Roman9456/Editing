import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, SAVE_CHANGES, SEARCH_SERVICE } from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

let saveState = initialState;

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      saveState = [...state, { id: nanoid(), name, price: Number(price) }];
      return saveState;
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      saveState = state.filter(service => service.id !== id)
      return saveState;
    }
    case SAVE_CHANGES: {
      const { id, name, price } = action.payload;

      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state[i].name = name;
          state[i].price = price;
          break;
        }
      }

      saveState = [...state];

      return saveState;
    }
    case SEARCH_SERVICE: {
      const { value } = action.payload;
      if (value.length === 0) {
        return saveState;
      } else {
        return state.filter(service => service.name.toLowerCase().includes(value.toLowerCase()));
      }
    }
    default:
      return state;
  }
}
