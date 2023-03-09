import { div, h1, p } from '../../../lib/great.js'
import { Link } from '../../../lib/great-router.js'

export const Hero = () => {
  return div(
    div(
      div(
        [
          h1('GreatJS', { className: 'text-5xl font-bold' }),
          p(
            'This is a new React like framework but for vanilla JavaScript. No transpiling, no extra development tools. It is not PerformanceEntry, but it is a work in progress, and the best way of learning a lot about the browser.',
            { className: 'py-6' }
          ),
          Link('Get Started', { to: 'docs', className: 'btn btn-primary' }),
        ],
        { className: 'max-w-md' }
      ),
      { className: 'hero-content text-center' }
    ),
    { className: 'hero min-h-[300px] bg-base-200' }
  )
}
