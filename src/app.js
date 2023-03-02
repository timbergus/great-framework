import { h1, p, div, button, input, span, addSignal } from './lib/great.js'

export default function () {
  const [color, setColor] = addSignal()
  const [text, setText] = addSignal()

  function handleSetOutput() {
    setText(this.value)
  }

  function handleChangeColor() {
    setColor(`text-${this.name}`)
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
      p({
        className: color,
        children: text,
      }),
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
      p({
        className: color,
        children: 'This is my cool paragraph',
      }),
    ],
  })
}
