export function render(anchor, element) {
  anchor.appendChild(element)
}

function createComponent(name, children, props = {}) {
  const component = document.createElement(name)

  if (props.name) component.name = props.name
  if (props.type) component.type = props.type
  if (props.style) component.style = props.style
  if (props.className) component.className = props.className
  if (props.onInput) component.addEventListener('input', props.onInput)
  if (props.onClick) component.addEventListener('click', props.onClick)
  if (!children) return component
  if (Array.isArray(children)) {
    for (let child of children) {
      typeof child === 'string'
        ? component.appendChild(document.createTextNode(child))
        : component.appendChild(child)
    }
  } else {
    component.innerHTML = children
  }
  return component
}

/**
 * @param {Object?} props
 * @param {string?} props.className
 * @param {string|number|Node|Node[]?} props.children
 * @return {Node}
 */
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
