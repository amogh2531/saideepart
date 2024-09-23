import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import "./index.css"
import store from './Store.js'


import theme from './theme.js'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <ChakraProvider theme={theme}>
         <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
