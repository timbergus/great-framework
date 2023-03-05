import { button, p, span } from '../../../lib/great.js'

export const Button = ({ name, children, onClick }) => {
  return button({
    name,
    className: `w-full rounded-md bg-${name}-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-${name}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${name}-600`,
    children: p({
      children: children
        ? children
        : span({ className: 'capitalize', children: name }),
    }),
    onClick,
  })
}
