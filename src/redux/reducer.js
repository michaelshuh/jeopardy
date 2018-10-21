import { combineReducers } from 'redux';

import jeopardy from './jeopardy/jeopardy.reducers';

const rootReducer = combineReducers({
  jeopardy,
})

export default rootReducer;
