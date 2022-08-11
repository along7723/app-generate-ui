export function param2Url(params) {
  let url = ''
  if (params) {
    url += '?'
    for (const p in params) {
      if (params[p]) {
        if (Array.isArray(params[p])) {
          for (const j in params[p]) {
            url += p + '=' + params[p][j] + '&'
          }
        } else {
          url += p + '=' + params[p] + '&'
        }
      }
    }
  }

  return url
}

