import { Router, Link, div } from '../greatjs/index.js'

import { Docs } from './pages/Docs/Docs.js'
import { Example } from './pages/Example/Example.js'
import { Home } from './pages/Home/Home.js'

export const App = () =>
  div({
    className: 'max-w-[768px] mx-auto',
    children: [
      div({
        className: 'navbar bg-base-100 gap-1',
        children: [
          Link({
            to: 'home',
            className: 'btn btn-ghost normal-case text-xl',
            children: 'Home',
          }),
          Link({
            to: 'docs',
            className: 'btn btn-ghost normal-case text-xl',
            children: 'Docs',
          }),
          Link({
            to: 'example',
            className: 'btn btn-ghost normal-case text-xl',
            children: 'Example',
          }),
        ],
      }),
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
  })
