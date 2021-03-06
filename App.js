import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store';
import Router from './scenes';

const Kernel = () => (
  <Provider store={createStore()}>
    <Router />
  </Provider>
)

export default Kernel
