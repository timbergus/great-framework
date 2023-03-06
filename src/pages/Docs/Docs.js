import { div, li, p, ul } from '../../lib/great.js'
import { DocImage } from './components/DocImage.js'
import { H1 } from './components/H1.js'
import { H2 } from './components/H2.js'
import { Highlight } from './components/Highlight.js'

export const Docs = () =>
  div({
    className: 'grid gap-y-6 pb-[calc(1/2*100vh)]',
    children: [
      H1('GreatJS'),
      p(
        'This new framework is a personal development because I want to remember how things were done before React. I have been working in Web development for almost twelve years, and I wanted to have my own framework. We never have enough JavaScript frameworks.'
      ),
      H2('Render'),
      div({
        className: 'grid gap-y-4',
        children: [
          p([
            'The minimum app contains an',
            Highlight('index.html'),
            'file that includes the',
            Highlight('style.css'),
            'and the',
            Highlight('script.js'),
            'file. As default I assume that a',
            Highlight('root'),
            'element exist so you do not need to add the render anchor. But you can add whatever anchor you want.',
          ]),
          DocImage('index', { className: 'md:w-1/2' }),
          p('In this anchor you will be rendering your application.'),
          DocImage('render', { className: 'md:w-2/3' }),
          p([
            'To render the application you can use the',
            Highlight('render'),
            'method from the library. As you can see, all the library is based on functions. Everything is a function. All the components are functions.',
          ]),
        ],
      }),
      H2('Components'),
      div({
        className: 'grid gap-y-4',
        children: [
          p([
            'All components receive an unnamed parameter that will be used as the',
            Highlight('children', { onlyLeft: true }),
            '. So the minimum component is a function with a parameter that can be a',
            Highlight('number', { onlyLeft: true }),
            ', a',
            Highlight('string', { onlyLeft: true }),
            ', another component, or even an array of a combination of these elements.',
          ]),
          DocImage('paragraph'),
          p(
            'All the components receive a second parameter that is an object with the properties of the component.'
          ),
          DocImage('properties'),
          p([
            'For example, this is a paragraph that receives a',
            Highlight('className'),
            'to set the text color to red. For laziness I am using Tailwind and DaisyUI. But you can create your own CSS and import it into the',
            Highlight('style.css'),
            'file. If a property is an event like',
            Highlight('onClick'),
            'for buttons, the property will be assigned using an event listener.',
          ]),
          DocImage('button', { className: 'md:w-2/3' }),
        ],
      }),
      H2('Signals'),
      p(
        'And here starts the juicy things of the framework. Signal! Or how we communicate events to different parts of the application.'
      ),
      div({
        className: 'grid gap-y-4',
        children: [
          p(
            'If you have worked with React or SolidJS you probably know that we have some hooks to assign events to variables. So if we click on a button and set the value of a hook variable using a hook method, all the properties related to that variable are immediately updated to the new value.'
          ),
          DocImage('state', { className: 'md:w-2/3' }),
          p(
            'Here I do something similar, but because we use vanilla JavaScript, all the updates must be directly implemented through the component. So, if we want to update a property, we need to pass a especial variable to that property. This variable is part of a signal and will connect the component to an event that will modify the property.'
          ),
          DocImage('signal', { className: 'md:w-2/3' }),
          p([
            'In this case',
            Highlight('mySignal'),
            'is a',
            Highlight('on'),
            'function that connects the component through a',
            Highlight('property'),
            'with an even. So every time the event is triggered using',
            Highlight('setMySignaValue'),
            'the component is modified like:',
            Highlight('component.property = value', { onlyLeft: true }),
            '.',
          ]),
          p(
            'This updates the component creating the same behavior that we have in React but in vanilla JavaScript.'
          ),
        ],
      }),
      H2('Routing'),
      p([
        'Routing is another interesting piece of work. Each',
        Highlight('Router'),
        'is a function, as all the components that exist inside the framework. In this case, a',
        Highlight('Router'),
        'is a',
        Highlight('div'),
        'that listens the',
        Highlight('navigate'),
        'event attached to the',
        Highlight('window', { onlyLeft: true }),
        '.',
      ]),
    ],
  })
