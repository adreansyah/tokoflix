const initialState = {
    items:[]
}
export const LoadScrollPage = (state = initialState,action)=>{   
    switch(action.type){
        case 'LOAD_DATA':
            return {
                ...state,
                fetching: true
            }
        case 'LOAD_RECEIVED':
        return {
                ...state,
                fetching: false,
                items: state.items.concat(action.payload.items.results)
            }
        default:
            return state;
    }
}

