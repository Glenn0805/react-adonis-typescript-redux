export const setModuleState = (payload) => async (dispatch) => {
  dispatch({
    type: 'SET_FOOBAR_STATE',
    payload,
  })
}
