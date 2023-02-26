import { render } from './src/lib/great-dom.js'

import app from './src/app.js'

const root = document.getElementById('root')

render(root, app())
