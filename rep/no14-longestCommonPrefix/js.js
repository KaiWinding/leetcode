/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
 
	const temp = strs[0]
	let str = ''

	for (let i = 0; i < temp.length; i++) {
		if (strs.every(item => item[i] === temp[i])) {
			str = str + temp[i]
		} else break
	}

	return str
}
