import Router, { Link } from './lib/great-router.js'
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
        className: 'text-3xl font-semibold text-zinc-700 dark:text-zinc-200',
        children: [
          'We',
          span({ children: 'lc', className: 'text-red-500 font-normal' }),
          'ome 👋',
        ],
      }),
      div({
        className: 'grid gap-8 justify-center p-4',
        children: [
          div({
            className: 'btn-group',
            children: [
              Link({ to: 'home', className: 'btn', children: 'Home' }),
              Link({ to: 'docs', className: 'btn', children: 'Docs' }),
              Link({ to: 'about', className: 'btn', children: 'About' }),
              Link({ to: 'car', className: 'btn', children: 'Car' }),
            ],
          }),
          Router({
            home: p({ children: 'This is the A route' }),
            docs: p({ children: 'This is the B route' }),
            about: p({ children: 'This is the C route' }),
          }),
          Router({
            car: p({ children: 'This is the CAR route' }),
          }),
        ],
      }),
      Layout({
        children: input({
          type: 'text',
          className: 'input w-full max-w-xs col-span-3',
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
        children: ['red', 'green', 'blue'].map((name) =>
          Button({
            name: name,
            onClick: handleChangeColor,
          })
        ),
      }),

      Jedi({ color }),
    ],
  })
}
