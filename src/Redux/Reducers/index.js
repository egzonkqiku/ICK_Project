import { combineReducers } from 'redux'
import { favouriteReducers } from './favourite.reducers'

const rootReducer = combineReducers({
    favourite: favouriteReducers,
})

export { rootReducer }