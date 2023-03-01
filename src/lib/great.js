export default function createComponent(name, children, state, props = {}) {
  const component = document.createElement(name)

  Object.entries(props).forEach(([key, value]) => {
    if (key?.includes('on')) {
      component[key.toLowerCase()] = value
    } else {
      component[key] = value
    }
  })

  if (children) {
    if (Array.isArray(children)) {
      for (let child of children) {
        if (['number', 'string'].includes(typeof child)) {
          component.appendChild(document.createTextNode(child))
        } else {
          component.appendChild(child)
        }
      }
    } else if (['number', 'string'].includes(typeof children)) {
      component.innerHTML = children
    } else {
      component.appendChild(children)
    }
  }

  if (state) {
    if (Array.isArray(state)) {
      for (let s of state) {
        component.addEventListener(s, function ({ detail }) {
          this[detail?.property] = detail?.value
        })
      }
    } else {
      component.addEventListener(state, function ({ detail }) {
        this[detail?.property] = detail?.value
      })
    }
  }

  return component
}

export function h1({ children, state, ...props } = {}) {
  return createComponent('h1', children, state, props)
}

export function p({ children, state, ...props } = {}) {
  return createComponent('p', children, state, props)
}

export function span({ children, state, ...props } = {}) {
  return createComponent('span', children, state, props)
}

export function input({ children, state, ...props } = {}) {
  return createComponent('input', children, state, props)
}

export function button({ children, state, ...props } = {}) {
  return createComponent('button', children, state, props)
}

export function div({ children, state, ...props } = {}) {
  return createComponent('div', children, state, props)
}
