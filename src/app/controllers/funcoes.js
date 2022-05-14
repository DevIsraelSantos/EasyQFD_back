module.exports = {
    isNull(param) {
      if (!param || param === '' || param === null || param === undefined || String(param).trim() === '') {
        return true
      } else {
        return false
      }
  
    }
  }