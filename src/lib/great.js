import { addSignal, appendElement, isEvent, setProperty } from './utils.js'

function createComponent(name, children, props = {}) {
  const component = document.createElement(name)

  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'function' && !isEvent(key)) {
      value(key, component)
    } else {
      setProperty(component, key, value)
    }
  })

  if (!children) return component

  if (typeof children === 'function') {
    children('innerHTML', component)
  } else {
    appendElement(component, children)
  }

  return component
}

function h1({ children, ...props } = {}) {
  return createComponent('h1', children, props)
}

function p({ children, ...props } = {}) {
  return createComponent('p', children, props)
}

function span({ children, ...props } = {}) {
  return createComponent('span', children, props)
}

function input({ children, ...props } = {}) {
  return createComponent('input', children, props)
}

function button({ children, ...props } = {}) {
  return createComponent('button', children, props)
}

function div({ children, ...props } = {}) {
  return createComponent('div', children, props)
}

export default createComponent
export { addSignal, h1, p, span, input, button, div }
