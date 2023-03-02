import { div, p } from './lib/great.js'

export default function (props) {
  return div({
    children: [
      p({
        className: props.className,
        children: props.name,
      }),
    ],
  })
}
