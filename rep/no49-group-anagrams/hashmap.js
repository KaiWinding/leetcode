/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const getKey = (str) => {
    return str.split('')
      .sort((a, b)=> a.charCodeAt() - b.charCodeAt())
      .join('')
  }

  const hasMap = strs.reduce((pre, str) => {
    const key = getKey(str)

    if (key in pre) {
      pre[key].push(str)
    } else {
      pre[key] = [str]
    }

    return pre
  }, {})

  return Object.keys(hasMap).map(key => hasMap[key])
}
