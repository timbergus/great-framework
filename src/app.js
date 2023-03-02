import { h1, p, div, button, input, span, addSignal } from './lib/great.js'
import jedi from './jedi.js'

const [color, setColor] = addSignal()
const [text, setText] = addSignal()
const [jediName, setJediName] = addSignal()

export default function () {
  function handleSetOutput() {
    setText(this.value)
  }

  function handleChangeColor() {
    setColor(`text-${this.name}`)
  }

  function handleReveal() {
    let count = 5

    fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        const interval = setInterval(function () {
          if (count > 0) {
            setJediName(count)
            count--
          } else {
            setJediName(data.name)
            clearInterval(interval)
          }
        }, 1000)
      })
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
      div({
        children: [
          button({
            onClick: handleReveal,
            children: 'Who is the Jedi?',
          }),
          p({
            children: jediName,
          }),
        ],
      }),
      jedi({
        className: color,
        name: jediName,
      }),
    ],
  })
}
