'use strict'
const Log = require('./Log.js').Log

{ // 求绝对值 返回计算过的值 A级
  let num = -1
  let numAbs = Math.abs(num)
  Log('Math Abs Result:\n', numAbs)

}

{ // Math.ceil() Math.floor() Math.round()的使用 A级
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
(function(){ // 十进制调整
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value)
		}
		value = +value
		exp = +exp
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN
		}
		// Shift
		value = value.toString().split('e')
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)))
		// Shift back
		value = value.toString().split('e')
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))
	}
	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp)
		}
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp)
		}
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp)
		}
	}
})()

  let round10 = Math.round10(69.2391321321,-2) // 无论正负数 四舍五入
  let floor10 = Math.floor10(69.2391321321,-2) // 无论正负数 去小于原数字的数 69.2391321321 返回69.23 -69.2391321321 返回-69.24 向下取
  let ceil10 = Math.ceil10(69.2391321321,-2) // 无论正负数 去大于原数字的数 69.2391321321 返回69.24 -69.2391321321 返回-69.23 向上取
  Log('Math round10,floor10,ceil10 Result:\n', round10, floor10, ceil10)

}

{ // Math.log() 返回一个数的自然对数 B级
  let num = 20
  let logNum = Math.log(num)
  Log('Math Log Result:\n', logNum)
}

{ // Math.max() 返回一组数中的最大值 A级
  let num = [1, 6, 2, 3, 4, 10, -1, 45, 40]
  let maxNum = Math.max(...num) 
  Log('Math max Result:\n', maxNum)
}

{ // Math.min() 返回一组数中的最小值 A级
  let num = [1, 6, 2, 3, 4, 10, -1, 45, 40]
  let minNum = Math.min(...num) 
  Log('Math min Result:\n', minNum)
}

{ // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent A级

  let num = Math.pow(7, 2)
  Log('Math pow Result:\n', num)

}

{ // Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)

  // 返回一个大于等于0，小于1的伪随机数
  function getRandom() {
    return Math.random();
  }

  // 返回一个介于min和max之间的随机数
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // 返回一个介于min和max之间的整型随机数
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let Random = getRandom()
  let RandomArbitrary = getRandomArbitrary(10, 20)
  let RandomInt = getRandomInt(1, 50)
  Log('Math Random,RandomArbitrary,RandomInt Result:\n', Random, RandomArbitrary, RandomInt)
  
}

{ // Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零
  // 传入该函数的参数会被隐式转换成数字类型
  // 此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN
  let num = Math.sign(3) 
  Log('Math sign Result:\n', num)

}

{ // Math.sqrt() 函数返回一个数的平方根
  
  // 计算正负数的平方根
  function sqrtFor(num) {
    let num1 = Math.abs(num)
    return Math.sign(num) === 1 ? Math.sqrt(num1) : -(Math.sqrt(num1))
  }

  // let num = Math.sqrt(-4)  NaN 无法计算
  let num = Math.sqrt(4)
  Log('Math sqrt Result:\n', num)

}

{ // Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分
  // 传入该函数的参数会被隐式转换成数字类型
  let num = Math.trunc('-13.3432')
  Log('Math trunc Result:\n', num)

}

