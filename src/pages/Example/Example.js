import { div, h1, input, p, span } from '../../lib/great.js'
import { createSignal } from '../../lib/utils.js'
import { Link, Router } from '../../lib/great-router.js'

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

  return div(
    [
      h1(
        ['We', span('lc', { className: 'text-red-500 font-normal' }), 'ome 👋'],
        { className: 'text-3xl font-semibold text-zinc-700 dark:text-zinc-200' }
      ),
      div(
        [
          div(
            [
              div(
                [
                  Link('First', { to: 'first', className: 'btn' }),
                  Link('Second', { to: 'second', className: 'btn' }),
                  Link('Third', { to: 'third', className: 'btn' }),
                ],
                { className: 'btn-group' }
              ),
              div(
                [
                  Link('Forth', { to: 'forth', className: 'btn' }),
                  Link('Fifth', { to: 'fifth', className: 'btn' }),
                  Link('Sixth', { to: 'sixth', className: 'btn' }),
                ],
                { className: 'btn-group justify-self-end' }
              ),
            ],
            { className: 'grid grid-cols-2 gap-2' }
          ),
          div(
            [
              Router({
                routes: {
                  first: p('This is the FIRST route'),
                  second: p('This is the SECOND route'),
                  third: p('This is the THIRD route'),
                },
              }),
              Router({
                className: ' justify-self-end',
                routes: {
                  forth: p('This is the FORTH route'),
                  fifth: p('This is the FIFTH route'),
                  sixth: p('This is the SIXTH route'),
                },
              }),
            ],
            { className: 'grid grid-cols-2 gap-2' }
          ),
        ],
        { className: 'grid gap-8 justify-center p-4' }
      ),
      input({
        type: 'text',
        className: 'input w-full max-w-xs',
        placeholder: 'Write something',
        onInput: handleSetOutput,
        autofocus: true,
      }),
      div(p(text(), { className: color() }), {
        className: 'h-10 flex items-center pl-2',
      }),
      Layout(
        ['red', 'green', 'blue'].map((name) =>
          Button(name, {
            name: name,
            onClick: handleChangeColor,
          })
        )
      ),
      Jedi({ color }),
    ],
    { className: 'flex flex-col gap-2 p-4' }
  )
}
