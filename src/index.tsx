import React from 'react'
import { render } from 'react-dom'
import { isMobile } from './utils'
import App from './components/App';

document.body.classList.toggle('is-mobile', isMobile)

render(
  <App />,
  document.getElementsByTagName('main')[0]
)
