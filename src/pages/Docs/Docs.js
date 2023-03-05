import { div, h1, h2, img, p, span } from '../../lib/great.js'

export const Docs = () =>
  div({
    className: 'grid gap-y-6 pb-[calc(1/2*100vh)]',
    children: [
      h1({ children: 'GreatJS' }),
      p(
        'This new framework is a personal development because I want to remember how things were done before React. I have been working in Web development for almost twelve years, and I wanted to have my own framework. We never have enough JavaScript frameworks.'
      ),
      h2({ children: 'Render' }),
      div({
        className: 'grid gap-y-4',
        children: [
          p([
            'The minimum app contains an',
            span({
              className: 'text-green-300 px-2',
              children: 'index.html',
            }),
            'file that includes the',
            span({
              className: 'text-green-300 px-2',
              children: 'style.css',
            }),
            'and the',
            span({
              className: 'text-green-300 px-2',
              children: 'script.js',
            }),
            'file. As default I assume that a',
            span({
              className: 'text-green-300 px-2',
              children: 'root',
            }),
            'element exist so you do not need to add the render anchor. But you can add whatever anchor you want.',
          ]),
          div({
            className: 'rounded-md overflow-hidden',
            children: img({
              src: 'assets/index.png',
              alt: 'index',
            }),
          }),
          p('In this anchor you will be rendering your application.'),
          div({
            className: 'rounded-md overflow-hidden',
            children: img({
              src: 'assets/render.png',
              alt: 'render',
            }),
          }),
          p([
            'To render the application you can use the',
            span({
              className: 'text-green-300 px-2',
              children: 'render',
            }),
            'method from the library. As you can see, all the library is based on functions. Everything is a function. All the components are functions.',
          ]),
        ],
      }),
      h2({ children: 'Components' }),
      div({
        className: 'grid gap-y-4',
        children: [
          p([
            'All components receive an unnamed parameter that will be used as the',
            span({
              className: 'text-green-300 pl-2',
              children: 'children',
            }),
            '. So the minimum component is a function with a parameter that can be a',
            span({
              className: 'text-green-300 pl-2',
              children: 'number',
            }),
            ', a',
            span({
              className: 'text-green-300 pl-2',
              children: 'string',
            }),
            ', another component, or even an array of a combination of these elements.',
          ]),
          div({
            className: 'rounded-md overflow-hidden',
            children: img({
              src: 'assets/paragraph.png',
              alt: 'paragraph',
            }),
          }),
          p(
            'All the components receive a second parameter that is an object with the properties of the component.'
          ),
          div({
            className: 'rounded-md overflow-hidden',
            children: img({
              src: 'assets/properties.png',
              alt: 'properties',
            }),
          }),
          p([
            'For example, this is a paragraph that receives a',
            span({
              className: 'text-green-300 px-2',
              children: 'className',
            }),
            'to set the text color to red. For laziness I am using Tailwind and DaisyUI. But you can create your own CSS and import it into the',
            span({
              className: 'text-green-300 px-2',
              children: 'style.css',
            }),
            'file. If a property is an event like',
            span({
              className: 'text-green-300 px-2',
              children: 'onClick',
            }),
            'for buttons, the property will be assigned using an event listener.',
          ]),
        ],
      }),
    ],
  })
