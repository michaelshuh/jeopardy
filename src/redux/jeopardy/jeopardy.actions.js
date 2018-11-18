export const SHOW_CLUE = 'SHOW_CLUE';
export const HIDE_CLUE = 'HIDE_CLUE';

export const showClue = (clue) => dispatch => {
  dispatch({
    type: SHOW_CLUE,
    data: clue,
  });
}

export const hideClue = () => dispatch => {
  dispatch({
    type: HIDE_CLUE,
  });
}
