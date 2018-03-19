import * as invariant from 'invariant'

/** usage: add `data-ui="header"` to header element */
export function getHeaderHeight(): number {
  const header = document.querySelector('[data-ui="header"]')

  invariant(header, 'no element with data-ui="header" found')

  if (!header) {
    return 0
  }

  return header.clientHeight
}
