import Router, { Link } from '../../lib/great-router.js'
import { div, h1, input, p, span } from '../../lib/great.js'
import { createSignal } from '../../lib/utils.js'
import { Button } from './components/Button.js'
import { Jedi } from './components/Jedi.js'
import { Layout } from './components/Layout.js'

export const Example = () => {
  const [color, setColor] = createSignal()
  const [text, setText] = createSignal()

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
            className: 'grid grid-cols-2 gap-2',
            children: [
              div({
                className: 'btn-group',
                children: [
                  Link({ to: 'first', className: 'btn', children: 'First' }),
                  Link({ to: 'second', className: 'btn', children: 'Second' }),
                  Link({ to: 'third', className: 'btn', children: 'Third' }),
                ],
              }),
              div({
                className: 'btn-group justify-self-end',
                children: [
                  Link({ to: 'forth', className: 'btn', children: 'Forth' }),
                  Link({ to: 'fifth', className: 'btn', children: 'Fifth' }),
                  Link({ to: 'sixth', className: 'btn', children: 'Sixth' }),
                ],
              }),
            ],
          }),
          div({
            className: 'grid grid-cols-2 gap-2',
            children: [
              Router({
                routes: {
                  first: p({ children: 'This is the FIRST route' }),
                  second: p({ children: 'This is the SECOND route' }),
                  third: p({ children: 'This is the THIRD route' }),
                },
              }),
              Router({
                className: ' justify-self-end',
                routes: {
                  forth: p({ children: 'This is the FORTH route' }),
                  fifth: p({ children: 'This is the FIFTH route' }),
                  sixth: p({ children: 'This is the SIXTH route' }),
                },
              }),
            ],
          }),
        ],
      }),
      input({
        type: 'text',
        className: 'input w-full max-w-xs',
        placeholder: 'Write something',
        onInput: handleSetOutput,
        autofocus: true,
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
