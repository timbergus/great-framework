import { div, img } from '../../../lib/great.js'

export const DocImage = (name, { className } = {}) =>
  div(img({ src: `assets/${name}.png`, alt: name }), {
    className: classNames('rounded-md overflow-hidden', className),
  })
