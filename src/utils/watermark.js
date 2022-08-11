import Vue from 'vue'

Vue.directive('watermark', (el, binding) => {
  function addWaterMarker(str, str2, parentNode, font, textColor) {// 水印文字，父元素，字体，文字颜色
    var can = document.createElement('canvas')
    parentNode.appendChild(can)
    can.width = 400
    can.height = 200
    can.style.display = 'none'
    var cans = can.getContext('2d')
    cans.rotate(-20 * Math.PI / 180)
    cans.font = font || '16px Microsoft JhengHei'
    cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
    cans.fillText(str, 20, 120)
    cans.fillText(str2, 20, 150)
    parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
    parentNode.style.borderBottom = 1
  }

  addWaterMarker(binding.value.text, binding.value.text2, el, binding.value.font, binding.value.textColor)
})
