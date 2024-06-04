'use client'
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Api } from './services/api'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: {

    [Api.reducerPath]: Api.reducer,
   
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
  
})

setupListeners(store.dispatch)