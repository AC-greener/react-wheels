//接收一个数组，并过滤falsy的值
function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}

export default classes;