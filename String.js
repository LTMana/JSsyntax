'use strict'
const Log = require('./Log.js').Log

{ // Sting anchor() 方法创建一个 <a> HTML 锚元素，被用作超文本靶标
  let myString = "Table of Contents";
  // document.body.innerHTML = myString.anchor("contents_anchor");
  // 输出： <a name="contents_anchor">Table of Contents</a>
}

{ // Sting charAt() 从一个字符串中返回指定的字符

  let anyString = 'Brave new world'
  let char = anyString.charAt(0)
  Log('String charAt Result:\n',char)
  
}

{ // Sting endsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false （ES6）
  // 第二个参数 position 在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处

  let str = "To be, or not to be, that is the question."
  let isEnd = str.endsWith('question.')
  let isEnd1= str.endsWith('to be', 19)
  Log('String endsWith Result:\n', isEnd, isEnd1)

}

{ // Sting includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。
  // 第二个参数 position 从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0

  let str = "To be, or not to be, that is the question."
  let isIncludes = str.includes('question')
  Log('String includes Result:\n', isIncludes)

}

{ // Sting indexOf() 方法返回调用  String 对象中第一次出现的指定值的索引
  // 没有找到返回 -1
  // indexof方法区分大小写
  let str = "To be, or not to be, that is the question."
  let indexOf = str.indexOf('to be')
  Log('String indexOf Result:\n', indexOf)
}

{ // Sting lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，从该字符串的后面向前查找
  // 第二个参数 fromIndex 从调用该方法字符串的此位置处开始查找
  // 没有找到返回 -1
  // lastIndexOf方法区分大小写
  let str = "To be, or not to be, that is the question."
  let lastIndexOf = str.lastIndexOf('to be')
  Log('String lastIndexOf Result:\n', lastIndexOf)
}

{ // Sting link() 方法创建一个 <a> HTML 元素，用该字符串作为超链接的显示文本，参数作为指向另一个 URL 的超链接
  let hotText = "MDN";
  let URL = "https://developer.mozilla.org/";

  // document.write("Click to return to " + hotText.link(URL));
  // Click to return to <a href="https://developer.mozilla.org/">MDN</a>
}

{  // Sting localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同

   // 当 引用字符串 在 比较字符串 前面时返回 -1
   // 当 引用字符串 在 比较字符串 后面时返回 1
   // 相同位置时返回 0
   let compare = 'a'.localeCompare('c')
   let compare1 = 'c'.localeCompare('a')
   let compare2 = 'a'.localeCompare('a')
   Log('String localeCompare Result:\n', compare, compare1, compare2)

}

{ // Sting match() 当一个字符串与一个正则表达式匹配时， match()方法检索匹配项
  // 返回 一个包含了整个匹配结果以及任何括号捕获的匹配结果的 Array ；如果没有匹配项，则返回 null 。
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let regexp = /[A-E]/gi // 不区分大小写
  let matches_array = str.match(regexp)
  Log('String match Result:\n', matches_array)

}


{ // Sting normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化.
  // 语法：str.normalize([form]);
  // 四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".
  // NFC - Normalization Form Canonical Composition.
  // NFD - Normalization Form Canonical Decomposition.
  // NFKC - Normalization Form Compatibility Composition.
  // NFKD - Normalization Form Compatibility Decomposition.
  let str = '攰'
  str.normalize("NFC")
  Log('String normalize Result:\n', str)
}

{ // Sting repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。 A级

  let str = 'abc'
  let repeatStr = str.repeat(3)
  Log('String repeat Result:\n', repeatStr)
 
}

{ // Sting replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。 A级
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // 返回新字符串
  let str = 'a333bc'
  let replaceStr = str.replace(str, 'dfdss')
  let re = /bc/gi
  let replaceStr1 = str.replace(re, 'fs')
  let re1 = /(\w+)\s(\w+)/;
  let str1 = "John Smith";
  let newstr = str1.replace(re1, "$2, $1");

  function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {
      return '-' + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }
// Smith, John
  Log('String replace Result:\n', replaceStr, replaceStr1, newstr)
 
}