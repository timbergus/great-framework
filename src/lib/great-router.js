import { button } from './great.js'

export function Link({ to, className, children }) {
  const component = button({
    className,
    children,
    onClick: function () {
      window.dispatchEvent(
        new CustomEvent('navigate', { detail: { route: to } })
      )
    },
  })

  window.addEventListener('navigate', function (event) {
    component.className = classNames(className, {
      'btn-active': event.detail.route === to,
    })
  })

  return component
}

export default function Router({ className, routes }) {
  const component = document.createElement('div')
  component.className = className

  // window.addEventListener('popstate', function () {})

  window.addEventListener('navigate', function (event) {
    const content = routes[event.detail.route]
    if (content) {
      // TODO Use it when I figure out how to use back/forward.
      // history.pushState({}, '', `#/${event.detail.route}`)
      component.replaceChildren(routes[event.detail.route])
    }
  })

  // Init
  window.dispatchEvent(
    new CustomEvent('navigate', {
      detail: { route: Object.keys(routes)[0] },
    })
  )

  return component
}
