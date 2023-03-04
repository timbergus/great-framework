import { h1, p, div, input, span, createSignal } from './lib/great.js'
import { Jedi } from './jedi.js'
import { Button } from './Button.js'
import { Layout } from './Layout.js'

const [color, setColor] = createSignal()
const [text, setText] = createSignal()

export const App = () => {
  function handleSetOutput() {
    setText(this.value)
  }

  function handleChangeColor() {
    setColor(`text-${this.name}-500`)
  }

  return div({
    className: 'flex flex-col gap-2 p-4',
    children: [
      h1({
        className: 'text-3xl font-semibold text-zinc-700',
        children: [
          'We',
          span({ children: 'lc', className: 'text-red-500 font-normal' }),
          'ome 👋',
        ],
      }),
      Layout({
        children: input({
          type: 'text',
          className:
            'col-span-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
          placeholder: 'Write something',
          onInput: handleSetOutput,
          autofocus: true,
        }),
      }),
      div({
        className: 'h-10 flex items-center pl-2',
        children: p({
          className: color(),
          children: text(),
        }),
      }),
      Layout({
        children: [
          Button({
            name: 'red',
            onClick: handleChangeColor,
          }),
          Button({
            name: 'green',
            onClick: handleChangeColor,
          }),
          Button({
            name: 'blue',
            onClick: handleChangeColor,
          }),
        ],
      }),

      Jedi({ color }),
    ],
  })
}
