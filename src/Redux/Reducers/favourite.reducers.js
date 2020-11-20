const initialValue = []

export const favouriteReducers = (state = initialValue, action) => {
    switch (action.type) {
        case 'SAVE_FAVOURITE':
            const isFavouurite = state.find((element) => element.id === action.payload.id)
            if(!isFavouurite) {
                return [...state, action.payload]
            }
            return state
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
