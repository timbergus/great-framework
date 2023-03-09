import { p, span } from '../../../lib/great.js'

export const InfoLine = ({ name, value, color }) => {
  return p(
    [
      span(`${name}: `, { className: 'font-bold' }),
      span(value, { className: color }),
    ],
    { className: 'text-zinc-700 dark:text-zinc-200' }
  )
}
