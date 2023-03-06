import { appendElement, isEvent, setProperty } from './utils.js'

export function createComponent(
  name,
  props = {},
  children = undefined || null
) {
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

export function h1({ children, ...props } = {}) {
  return createComponent('h1', props, children)
}

export function h2({ children, ...props } = {}) {
  return createComponent('h2', props, children)
}

export function p(children, props = {}) {
  return createComponent('p', props, children)
}

export function span({ children, ...props } = {}) {
  return createComponent('span', props, children)
}

export function a({ children, ...props } = {}) {
  return createComponent('a', props, children)
}

export function input({ children, ...props } = {}) {
  return createComponent('input', props, children)
}

export function button({ children, ...props } = {}) {
  return createComponent('button', props, children)
}

export function div({ children, ...props } = {}) {
  return createComponent('div', props, children)
}

export function img(props = {}) {
  return createComponent('img', props)
}

export function ul(children, props = {}) {
  return createComponent('ul', props, children)
}

export function li(children, props = {}) {
  return createComponent('li', props, children)
}
