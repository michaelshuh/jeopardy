import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
}
