import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux';
import rootReducer from './reducers';

function configureStore(initialState) {
  const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOTLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  );
}

export default configureStore;
