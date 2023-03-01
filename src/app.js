import { h1, p, div, button, input, span } from './lib/great.js'

export default function () {
  const Display = p({ state: ['changeColor', 'changeText'] })

  function handleSetOutput() {
    Display.dispatchEvent(
      new CustomEvent('changeText', {
        detail: { property: 'innerHTML', value: this.value },
      })
    )
  }

  function handleChangeColor() {
    Display.dispatchEvent(
      new CustomEvent('changeColor', {
        detail: { property: 'className', value: `text-${this.name}` },
      })
    )
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
        autofocus: true,
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
