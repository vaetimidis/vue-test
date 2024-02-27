/* eslint-disable prefer-spread */
export const debounce = function (fn: Function, d: number) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, d)
  }
}
