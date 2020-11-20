// import { createStore } from 'redux'
// import { rootReducer } from './Reducers/index'

// const store = createStore(rootReducer)

// export { store }

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import {rootReducer} from './Reducers/index'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourite']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export {store, persistor}