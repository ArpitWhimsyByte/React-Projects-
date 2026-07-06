import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
 import React from 'react'

 const createAnotherElement=React.createElement(
  'a',
  {href: 'https://google.com',target :'_blank'},
  'click on me visit google'
 )

createRoot(document.getElementById('root')).render(
  
    createAnotherElement
  
)
