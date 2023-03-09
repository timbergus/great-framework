import { button, p, span } from '../../../lib/great.js'

export const Button = (children, { name, onClick }) => {
  return button(
    p(children ? children : span(name, { className: 'capitalize' })),
    {
      name,
      className: `btn bg-${name}-600 hover:bg-${name}-700`,
      onClick,
    }
  )
}
