import { p, span } from '../../../lib/great.js'

export const InfoLine = ({ name, value, color }) => {
  return p({
    className: 'text-zinc-700 dark:text-zinc-200',
    children: [
      span({ className: 'font-bold', children: `${name}: ` }),
      span({ className: color, children: value }),
    ],
  })
}
