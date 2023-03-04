import { render } from './src/lib/great-dom.js'

import { App } from './src/App.js'

const root = document.getElementById('root')

render(root, App())
