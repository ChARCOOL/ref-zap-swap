let timeout: NodeJS.Timeout

export const debounce = (callback: () => void, ms: number) => {
  clearTimeout(timeout)
  timeout = setTimeout(callback, ms)
}
