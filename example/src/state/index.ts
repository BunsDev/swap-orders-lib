import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import user from './user/reducer'
import lists from './lists/reducer'
import application from './application/reducer'
import multicall from './multicall/reducer'
import web3Context from './global/web3ContextSlice'
import transactions from './transactions/reducer'
import { gelatoReducers, GELATO_PERSISTED_KEYS } from 'soulswap-limit-orders-react'

const PERSISTED_KEYS: string[] = [
  'application', 'lists', 'multicall', 'transactions', 'user', 'web3Context',
 ...GELATO_PERSISTED_KEYS
]

const store = configureStore({
  reducer: {
    application,
    lists,
    multicall,
    transactions,
    user,
    web3Context,
    ...gelatoReducers,
  },
  middleware: [
    // ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS, debounce: 1000 }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
