import { div } from '../../../../greatjs/index.js'

export const Layout = ({ children }) =>
  div({
    className: 'grid grid-cols-1 md:grid-cols-3 gap-2',
    children,
  })
