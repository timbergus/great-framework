/**
 * One signal will store only one variable. A variable can be
 * a number, string, boolean... and an object.
 *
 * If we have an object, everything updates at the same time
 * but we need to separate all the objects properties and
 * set to each of them a property and an element to apply.
 */

export function createSignal() {
  const events = {}

  function on(key) {
    return function set(event, element) {
      const k = key ?? 'grevents'
      if (!events[k]) {
        events[k] = {}
      }
      if (!events[k][event]) {
        events[k][event] = [element]
      } else {
        events[k][event].push(element)
      }
    }
  }

  function emit(value) {
    if (typeof value === 'object') {
      Object.entries(value).forEach(function ([key, value]) {
        if (events[key]) {
          Object.keys(events[key]).forEach(function (k) {
            events[key][k].forEach(function (element) {
              element[k] = value
            })
          })
        }
      })
    } else {
      Object.keys(events.grevents).forEach(function (key) {
        events.grevents[key].forEach(function (element) {
          element[key] = value
        })
      })
    }
  }

  return [on, emit]
}

export function appendElement(parent, element) {
  if (Array.isArray(element)) {
    if (element) {
      for (let el of element) {
        appendElement(parent, el)
      }
    }
  } else {
    if (element) {
      parent.appendChild(
        ['number', 'string'].includes(typeof element)
          ? document.createTextNode(element)
          : element
      )
    }
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
