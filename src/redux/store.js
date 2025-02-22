import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import {filtersReducer} from './filtersSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  blacklist: "filters"
}

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer
  },
})
