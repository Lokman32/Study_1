import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import FormTache from './FormTache'
import ListTache from './Tachelist'

export default function TpApp() {



  return(
    <Provider store={store}>
      <FormTache />
      <ListTache />
    </Provider>
  )
};
