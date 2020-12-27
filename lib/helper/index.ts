const scopedClassMaker = (prefix: string) => {
  return (name?: string) => {
    return [prefix, name].filter(Boolean).join('-')
  }
}
const isFunction = (value) => {
  return typeof value === "function"
}
export {
  scopedClassMaker,
  isFunction
}