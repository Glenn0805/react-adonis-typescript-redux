/*eslint-disable*/
const initialState={
    upComing:[],
    newMovie:[],
    sideBarToggle:false,
    movieDetailModal:{
        detail:{},
        toggle:false
    }
}

const reducers = {
    SET_FOOBAR_STATE: (state, action) => ({ ...state, ...action.payload })
}

export default (state = initialState, action) => {
    if (!(action.type in reducers)) {
        return state
    }
    const newState = reducers[action.type](state, action)
    return newState
}