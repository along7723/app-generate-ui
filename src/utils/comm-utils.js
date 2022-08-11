export function refresh(router, query) {
  router.replace({ path: '/refresh', query: query })
}

export function showSucess(_this, text) {
  _this.$message({
    message: text,
    type: 'success'
  })
}

export function showError(_this, text) {
  _this.$message({
    message: text,
    type: 'error'
  })
}

export function showWarning(_this, text) {
  _this.$message({
    message: text,
    type: 'warning'
  })
}
