import { button, p, span } from '../../../../greatjs/index.js'

export const Button = ({ name, children, onClick }) => {
  return button({
    name,
    className: `btn bg-${name}-600 hover:bg-${name}-700`,
    children: p(
      children ? children : span({ className: 'capitalize', children: name })
    ),
    onClick,
  })
}
