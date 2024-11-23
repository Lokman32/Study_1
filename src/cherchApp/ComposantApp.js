import React from 'react'
import ChercheBar from './ChercheBar'
import ResultatList from './ResultatList'
import { Provider, useSelector } from 'react-redux'
import store from './Store'

export default function ComposantApp() {
  const type = useSelector(s=>s.items.type)
  return(
    <Provider store={store}>
    <h1>Composant App</h1>
    <ChercheBar />
    {type && <p>le type : {type}</p>}
    <ResultatList />
    </Provider>
  )
};
