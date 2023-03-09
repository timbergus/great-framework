import { div } from './lib/great.js'
import { Link, Router } from './lib/great-router.js'

import { Docs } from './pages/Docs/Docs.js'
import { Example } from './pages/Example/Example.js'
import { Home } from './pages/Home/Home.js'

export const App = () =>
  div(
    [
      div(
        [
          Link('Home', {
            to: 'home',
            className: 'btn btn-ghost normal-case text-xl',
          }),
          Link('Docs', {
            to: 'docs',
            className: 'btn btn-ghost normal-case text-xl',
          }),
          Link('Example', {
            to: 'example',
            className: 'btn btn-ghost normal-case text-xl',
          }),
        ],
        { className: 'navbar bg-base-100 gap-1' }
      ),
      Router({
        className: 'p-4',
        routes: {
          home: Home(),
          docs: Docs(),
          example: Example(),
        },
        defaultRoute: 'docs',
      }),
    ],
    { className: 'max-w-[768px] mx-auto' }
  )
