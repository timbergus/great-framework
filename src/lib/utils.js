export function addSignal() {
  const events = {}

  function on(event, element) {
    if (!events[event]) {
      events[event] = [element]
    } else {
      events[event].push(element)
    }
  }

  function emit(value) {
    Object.keys(events).forEach(function (key) {
      events[key].forEach(function (element) {
        element[key] = value
      })
    })
  }

  return [on, emit]
}

export function appendElement(parent, element) {
  if (Array.isArray(element)) {
    for (let el of element) {
      appendElement(parent, el)
    }
  } else {
    parent.appendChild(
      ['number', 'string'].includes(typeof element)
        ? document.createTextNode(element)
        : element
    )
  }
}

export function isEvent(property) {
  return property?.includes('on')
}

export function setProperty(component, property, value) {
  if (isEvent(property)) {
    component[property.toLowerCase()] = value
  } else {
    component[property] = value
  }
}
