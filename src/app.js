import { h1, p, div, button, input, span } from './lib/great.js'

export default function () {
  const Display = p()

  const handleSetOutput = (event) => {
    Display.innerHTML = event.target.value
  }
  const handleChangeColor = (event) => {
    Display.style.color = event.target.name
  }

  return div({
    children: [
      h1({
        children: [
          'We',
          span({ children: 'lc', className: 'text-red font-normal' }),
          'ome 👋',
        ],
      }),
      input({
        type: 'text',
        onInput: handleSetOutput,
      }),
      Display,
      div({
        className: 'flex gap-8',
        children: [
          button({
            name: 'red',
            className: 'cursor-pointer',
            children: 'Red',
            onClick: handleChangeColor,
          }),
          button({
            name: 'green',
            className: 'cursor-pointer',
            children: 'Green',
            onClick: handleChangeColor,
          }),
          button({
            name: 'blue',
            className: 'cursor-pointer',
            children: 'Blue',
            onClick: handleChangeColor,
          }),
        ],
      }),
    ],
  })
}
