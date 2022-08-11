export function fetchExportFile(res, name) {
  const blob = new Blob([res])
  const fileName = name
  const elink = document.createElement('a')// 创建a标签
  elink.download = fileName// 为a标签添加download属性
// a.download = fileName; //命名下载名称
  elink.style.display = 'none'
  elink.href = URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()// 点击下载
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)// 释放标签
}
