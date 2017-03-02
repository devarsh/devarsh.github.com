import {render} from 'react-dom'
import React from 'react'
import {Layout} from './components/Layout.js'

render(<Layout/>,document.getElementById('container'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(reg => {
    console.log(`Registration succeeded. Scope is ${reg.scope}`);
  }).catch(err => {
    console.log(`Registration failed with ${err.toString()}`);
  });
}
