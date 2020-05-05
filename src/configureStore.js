import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log('error', e);
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();

function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}

export default configureStore;
