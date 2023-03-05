import { Link } from '../../../lib/great-router.js'
import { div, h1, p } from '../../../lib/great.js'

export const Hero = () => {
  return div({
    className: 'hero min-h-[300px] bg-base-200',
    children: div({
      className: 'hero-content text-center',
      children: div({
        className: 'max-w-md',
        children: [
          h1({
            className: 'text-5xl font-bold',
            children: 'GreatJS',
          }),
          p({
            className: 'py-6',
            children:
              'This is a new React like framework but for vanilla JavaScript. No transpiling, no extra development tools. It is not PerformanceEntry, but it is a work in progress, and the best way of learning a lot about the browser.',
          }),
          Link({
            to: 'docs',
            className: 'btn btn-primary',
            children: 'Get Started',
          }),
        ],
      }),
    }),
  })
}
