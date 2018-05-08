export default {
  extend (obj) {
    var res
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        res = []
        for (let i = 0; i < obj.length; i++) {
          res.push(this.extend(obj[i]))
        }
      } else {
        res = {}
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            res[key] = this.extend(obj[key])
          }
        }
      }
    } else {
      res = obj
    }
    return res
  },
  deep (obj, key) {
    var ret = obj
    try {
      let keys = key.toString().split('.')
      keys.forEach(k => {
        ret = ret[k]
      })
    } catch (e) {
      throw new TypeError(e)
    }
    return ret
  }
}
