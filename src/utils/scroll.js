/**
 * Найти родителя, которого скроллим
 * @param  {HTMLElement} element - элемент, для которого ищет родительский элемент
 * @paran  {Boolean} noCheckScrollHeight - проверять
 * @return {HTMLElement} найденный родительский элемент
 */
export function findScrollableParent(element, noCheckScrollHeight) {
  element = element.parentElement
  if (!element || element === document.documentElement)
    return document.documentElement
  if (noCheckScrollHeight || element.scrollHeight > element.clientHeight ||
    element === document.body ||
    element === document.documentElement) {
    const overflowY = getComputedStyle(element).overflowY
    if (overflowY === 'auto' || overflowY === 'scroll')
      return element
  }
  return findScrollableParent(element)
}

/**
 * Найти родительский элемент, за пределы которого нельзя выходить элементу
 * @param  {HTMLElement} element - элемент, для которого ищет родительский элемент
 * @return {HTMLElement} найденный родительский элемент
 */
export function findOverflowedParent(element) {
  return findScrollableParent(element, true)
}

/**
 * Узнать текущий скролл элемента
 * @param  {HTMLElement} element
 * @return {Number}
 */
export function getScroll(element) {
  if (element === document.body || element === document.documentElement)
    return document.body.scrollTop || document.documentElement.scrollTop
  return element.scrollTop
}
