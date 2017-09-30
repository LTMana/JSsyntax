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

{ // Sting startsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false[es6]
  // 第二个参数 position 在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处

  let str = "To be, or not to be, that is the question."
  let isStart = str.startsWith('To be')
  let isStart1= str.startsWith('to be', 19)
  Log('String startsWith Result:\n', isStart, isStart1)

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


{ // Sting search() 方法执行正则表达式和 String对象之间的一个搜索匹配。
  // 如果果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。
  let str = 'a333bc'
  let re = /bc/gi
  Log('String search Result:\n', str.search(re))
 
}

{ // Sting slice() 方法提取一个字符串的一部分，并返回一新的字符串 A级 (字符串切片)
  // 如果果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。
  let str = 'Hello Node.js is Cennavi in China'
  let result = str.slice(0,5)
  let result1 = str.slice(-5)
  Log('String slice Result:\n', result,result1)
}
// http://www.cnblogs.com/littledu/archive/2011/04/18/2019475.html (slice，substring区别)
{ // Sting substr() 法返回一个字符串中从指定位置开始到指定字符数的字符。 (注意与)
  // 如果第二个参数length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。
  let str = 'Hello Node.js is Cennavi in China'
  let result = str.substr(6)
  Log('String substr Result:\n', result)
}

// http://www.cnblogs.com/littledu/archive/2011/04/18/2019475.html (slice，substring区别)
{ // Sting substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
  
  let str = 'Hello Node.js is Cennavi in China'
  let result = str.substring(0,6)
  Log('String substring Result:\n', result)
}

{ // Sting split() 使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 A级
  // 如果果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。
  let str = 'Hello Node.js is Cennavi in China'
  let result = str.split(' ')
  Log('String split Result:\n', result)
}


{ // toLocaleLowerCase()方法根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。
  let str = 'H'
  let result = str.toLocaleLowerCase()
  Log('String toLocaleLowerCase Result:\n', result)
}

{ // 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。
  let str = 'h'
  let result = str.toLocaleUpperCase()
  Log('String toLocaleUpperCase Result:\n', result)
}


{ // toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。
  let str = 'A'
  let result = str.toLowerCase()
  Log('String toLowerCase Result:\n', result)
}

{ // toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。
  let str = 'a'
  let result = str.toUpperCase()
  Log('String toUpperCase Result:\n', result)
}

{ // trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。
  let str = '   foo  '
  let result = str.trim()
  Log('String trim Result:\n', result)
}


{ // valueOf() 方法返回一个String对象的原始值（primitive value）
  let str = 'Hello world'
  let result = str.valueOf()
  Log('String valueOf Result:\n', result)
}

{ // String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @，是用来获取一个模板字符串的原始字面量值的。ES6
  let name = "Bob";
  Log('String raw Result:\n', String.raw `Hi\n${name}!`) 
}




