import { span } from '../../../lib/great.js'

export const Highlight = (children, props = {}) =>
  span({
    className: `text-green-300 ${props.onlyLeft ? 'pl-2' : 'px-2'}`,
    children,
  })
