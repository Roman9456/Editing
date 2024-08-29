import { CHANGE_SERVICE_FIELD, EDIT_SERVICE, EDIT_CANCEL } from '../actions/actionTypes';
const initialState = {
  name: '',
  price: '',
  edit: {
    status: false,
    id: 0,
  },
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case EDIT_SERVICE: {
      const { id, name, price } = action.payload;
      return { name, price, edit: { status: true, id } };
    }
    case EDIT_CANCEL: {
      return initialState;
    }
    default:
      return state;
  }
}
