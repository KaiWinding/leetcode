/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	return x === Number(String(x).split('').reverse().join(''))	   
}
