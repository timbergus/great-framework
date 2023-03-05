import { div } from '../../../lib/great.js'

export const Layout = ({ children }) =>
  div({
    className: 'grid grid-cols-1 md:grid-cols-3 gap-2',
    children,
  })
