import { div } from './lib/great.js'

export const Layout = ({ children }) =>
  div({
    className: 'grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 gap-2',
    children,
  })
