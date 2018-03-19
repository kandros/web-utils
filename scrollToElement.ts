import { CssSelector } from 'types'
import * as invariant from 'invariant'
import { getHeaderHeight } from 'getHeaderHeight'

export function scrollToElement(
  selector: CssSelector,
  /** is header calculates offset from element with data-ui="header" */
  offset: number | 'header' = 0,
): void {
  const element = document.querySelector(selector)

  invariant(element, `no element found with selector: ${selector}`)

  if (element) {
    const os = offset === 'header' ? getHeaderHeight() : offset

    element.scrollIntoView()
    window.scrollTo(window.scrollX, window.scrollY - os)
  }
}
