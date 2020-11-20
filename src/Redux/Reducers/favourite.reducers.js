const initialValue = []

export const favouriteReducers = (state = initialValue, action) => {
    switch (action.type) {
        case 'SAVE_FAVOURITE':
            return [...state, action.payload]
        case 'DELETE_FAVOURITE':
            const newList = state.filter((element=>{
                if(element.id === action.payload){
                    return false
                }
                return true
            }))
            return newList 
        default:
            return state
    }
}
