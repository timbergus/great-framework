import { div, img } from '../../../lib/great.js'

export const DocImage = (name, { className } = {}) =>
  div({
    className: classNames('rounded-md overflow-hidden', className),
    children: img({
      src: `assets/${name}.png`,
      alt: name,
    }),
  })
