import { createSignal, div, img } from './lib/great.js'
import { Layout } from './Layout.js'
import { Button } from './Button.js'
import { InfoLine } from './infoLine.js'

export const Jedi = ({ color }) => {
  const [jedi, setJedi] = createSignal()

  function handleFetchJedi() {
    fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        setJedi(data)
      })
  }

  return div({
    className: 'flex flex-col gap-2',
    children: Layout({
      children: div({
        className: 'col-span-3 flex flex-col gap-y-2',
        children: [
          Button({
            name: 'fuchsia',
            onClick: handleFetchJedi,
            children: 'Who is the Jedi?',
          }),
          div({
            className: 'border-4 border-amber-800',
            children: img({
              src: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/06/27/14/markhamill.jpg',
              alt: 'Luke Skywalker',
            }),
          }),
          InfoLine({
            name: 'Name',
            color: color(),
            value: jedi('name'),
          }),
          InfoLine({
            name: 'Birth year',
            color: color(),
            value: jedi('birth_year'),
          }),
          InfoLine({
            name: 'Eye color',
            color: color(),
            value: jedi('eye_color'),
          }),
          InfoLine({
            name: 'Skin color',
            color: color(),
            value: jedi('skin_color'),
          }),
          InfoLine({
            name: 'Hair color',
            color: color(),
            value: jedi('hair_color'),
          }),
          InfoLine({
            name: 'Height',
            color: color(),
            value: jedi('height'),
          }),
          InfoLine({
            name: 'Mass',
            color: color(),
            value: jedi('mass'),
          }),
        ],
      }),
    }),
  })
}
