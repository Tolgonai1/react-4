import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const defaultState ={
    name: '',
    age: ''
}

const userReducer = (state = defaultState,action)=> {
    switch (action.type){
        case 'USER NAME':
            return {...state,name: action.payload}
        case 'USER AGE':
            return {...state,age: action.payload}
        default:
            return state
    }
}

const store = createStore(userReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
  </BrowserRouter>
)
