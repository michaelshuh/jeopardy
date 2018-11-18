import {
  SHOW_CLUE,
  HIDE_CLUE,
} from '../actions';

export const initialState = {
  currentClue: null,
  showClue: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CLUE: {
      const clue = action.data;
      return {
        ...state,
        currentClue: clue,
        showClue: true,
      }
    }
    case HIDE_CLUE:
      return {
        ...state,
        currentClue: null,
        showClue: false,
      }
    default:
      return state;
  }
}
