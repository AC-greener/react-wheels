// 导入一个目录
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons/', true, /\.svg$/))
} catch (error) {
  // console.log(error)
}