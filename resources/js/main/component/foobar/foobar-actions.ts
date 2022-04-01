/*eslint-disable*/
export const setModuleState = (payload) => async (dispatch) => {
  dispatch({
    type: 'SET_FOOBAR_STATE',
    payload,
  })
}

export const incrementFunction = (increment) => async (dispatch) => {
  dispatch({
    type: 'SET_FOOBAR_STATE',
    payload: {
        numberState: ++increment,
        }
  })
}

export const decrementFunction = (decrement) => async (dispatch) => {
  dispatch({
        type: 'SET_FOOBAR_STATE',
        payload: {
        numberState: --decrement,
        }
      })
}
