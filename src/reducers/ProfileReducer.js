const INITIAL_STATE = {
    name: '',
    email: '',
    minYear: '',
    maxYear: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'modifica_name'){
        return { ...state, name: action.payload }
    }
    if(action.type == 'modifica_email') {
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_minyear') {
        return { ...state, minYear: action.payload }
    }
    if(action.type == 'modifica_maxyear') {
        return { ...state, maxYear: action.payload }
    }
    return state;
}