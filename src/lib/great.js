export default function createComponent(name, children, props = {}) {
  const component = document.createElement(name)

  Object.entries(props).forEach(([key, value]) => {
    if (key?.includes('on')) {
      component.addEventListener(
        key.substring(2, key.length).toLowerCase(),
        value
      )
    } else {
      component[key] = value
    }
  })

  if (!children) return component

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

  return component
}

export function h1({ children, ...props } = {}) {
  return createComponent('h1', children, props)
}

export function p({ children, ...props } = {}) {
  return createComponent('p', children, props)
}

export function span({ children, ...props } = {}) {
  return createComponent('span', children, props)
}

export function input({ children, ...props } = {}) {
  return createComponent('input', children, props)
}

export function button({ children, ...props } = {}) {
  return createComponent('button', children, props)
}

export function div({ children, ...props } = {}) {
  return createComponent('div', children, props)
}
