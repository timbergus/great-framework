export function render(anchor, element) {
  anchor.appendChild(element)
}

export function h1({ children, className }) {
  const component = document.createElement('h1')
  if (className) component.className = className
  if (children) component.innerHTML = children
  return component
}

export function p({ children, className }) {
  const component = document.createElement('p')
  if (className) component.className = className
  if (children) component.innerHTML = children
  return component
}

export function input({ children, className, type, onInput }) {
  const component = document.createElement('input')
  if (type) component.type = type
  if (className) component.className = className
  if (children) component.innerHTML = children
  component.addEventListener('input', onInput)
  return component
}

export function button({ name, children, className, onClick }) {
  const component = document.createElement('button')
  if (name) component.name = name
  if (className) component.className = className
  if (children) component.innerHTML = children
  component.addEventListener('click', onClick)
  return component
}

export function div({ children, className }) {
  const component = document.createElement('div')
  if (className) component.className = className
  if (children) {
    for (let i = 0; i < children.length; i++) {
      component.appendChild(children[i])
    }
  }
  return component
}
