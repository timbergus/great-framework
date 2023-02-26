import { h1, p, div, button, input } from './great.js'

export default function () {
  const Display = p({})

  const handleSetOutput = (event) => {
    Display.innerHTML = event.target.value
  }
  const handleChangeColor = (event) => {
    Display.style.color = event.target.name
  }

  return div({
    children: [
      h1({ children: 'Welcome' }),
      input({
        type: 'text',
        onInput: handleSetOutput,
      }),
      Display,
      div({
        className: 'actions',
        children: [
          button({
            name: 'red',
            className: 'button',
            children: 'Red',
            onClick: handleChangeColor,
          }),
          button({
            name: 'green',
            className: 'button',
            children: 'Green',
            onClick: handleChangeColor,
          }),
          button({
            name: 'blue',
            className: 'button',
            children: 'Blue',
            onClick: handleChangeColor,
          }),
        ],
      }),
    ],
  })
}
