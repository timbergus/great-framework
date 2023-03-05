import { p, span } from '../../../../greatjs/index.js'

export const InfoLine = ({ name, value, color }) => {
  return p(
    [
      span({ className: 'font-bold', children: `${name}: ` }),
      span({ className: color, children: value }),
    ],
    {
      className: 'text-zinc-700 dark:text-zinc-200',
    }
  )
}
