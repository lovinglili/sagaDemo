import default_state from './defaultState'


const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)

    switch (action.type) {
       
        case 'GET_LIST_ASYNC_SUCCESS':

            new_state.list = action.payload.data.data; break;

        default:return previous_state;
    }
    return new_state
}

export default reducer