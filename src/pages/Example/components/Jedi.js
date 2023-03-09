import { div, img } from '../../../lib/great.js'
import { createSignal } from '../../../lib/utils.js'

import { Layout } from './Layout.js'
import { Button } from './Button.js'
import { InfoLine } from './InfoLine.js'

export const Jedi = ({ color }) => {
  const [jedi, setJedi] = createSignal()

  function handleFetchJedi() {
    fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        setJedi(data)
      })
  }

  return div(
    Layout(
      div(
        [
          Button('Who is the Jedi?', {
            name: 'fuchsia',
            onClick: handleFetchJedi,
          }),
          div(
            img({
              src: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/06/27/14/markhamill.jpg',
              alt: 'Luke Skywalker',
            }),
            { className: 'border-4 border-amber-800' }
          ),
          Object.entries({
            name: 'Name',
            birth_year: 'Birth year',
            eye_color: 'Eye color',
            skin_color: 'Skin color',
            hair_color: 'Hair color',
            height: 'Height',
            mass: 'Mass',
          }).map(([value, name]) =>
            InfoLine({
              name,
              color: color(),
              value: jedi(value),
            })
          ),
        ],
        { className: 'col-span-3 flex flex-col gap-y-2' }
      )
    ),
    { className: 'flex flex-col gap-2' }
  )
}
