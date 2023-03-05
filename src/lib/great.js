import { createSignal, appendElement, isEvent, setProperty } from './utils.js'

function createComponent(name, props = {}, children = undefined || null) {
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
  return createComponent('h1', props, children)
}

function p({ children, ...props } = {}) {
  return createComponent('p', props, children)
}

function span({ children, ...props } = {}) {
  return createComponent('span', props, children)
}

function a({ children, ...props } = {}) {
  return createComponent('a', props, children)
}

function input({ children, ...props } = {}) {
  return createComponent('input', props, children)
}

function button({ children, ...props } = {}) {
  return createComponent('button', props, children)
}

function div({ children, ...props } = {}) {
  return createComponent('div', props, children)
}

function img(props = {}) {
  return createComponent('img', props)
}

export default createComponent
export { createSignal, h1, p, div, span, a, input, button, img }
