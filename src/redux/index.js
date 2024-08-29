import {
  combineReducers,
  compose,
  legacy_createStore
} from 'redux';
import serviceListReducer from './serviceList';
import serviceAddReducer from './serviceAdd';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      serviceList: serviceListReducer,
      serviceAdd: serviceAddReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

const store = configureStore();
export default store;
