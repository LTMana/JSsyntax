
'use strict'

const Log = require('./Log.js').Log

{ // Array find函数 返回新数组 查找
  let inventory = [
    {name: 'apples', quantity: 2}, 
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ]
  let result = inventory.find(fruit => {
    return fruit.quantity === 2;
  })
  console.log('Array Find Result:\n',result)
}

{ // Array sort函数 改变源数组 排序
  let inventory = [
    {name: 'apples', quantity: 2}, 
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ]
  inventory.sort((a,b) => {
    // return a.quantity - b.quantity
    return a.quantity - b.quantity // a - b大于0 b排在a前 升序排列
  })
  console.log('Array Sort Result:\n',inventory)
}

{ // Array From 函数 把set，map，string转化为数组 返回新数组

  // 字符串转数组
  let strArray = Array.from('foo')
  console.log('Array From StrArray:\n', strArray)
  // 数组元素乘2
  let his = [1, 2, 3]
  let result = Array.from(his, x => x * 2)
  console.log('Array From Result:\n', result)

}

{ // Array Concat 函数 返回新数组 数组合并
  let arr1 = ["a", "b", "c"]
  let arr2 = ["d", "e", "f"]
  let result = arr1.concat(arr2)
  console.log('Array Concat Result:\n', result)
}

{ // Array copyWithin 函数 改变源数组 浅拷贝数组元素到指定位置
  // arr.copyWithin(target, start, end)
  let arr = [1, 2, 3, 4, 5]
  arr.copyWithin(0,-2)
  console.log('Array copyWithin Result:\n',arr)
}

{ // Array entries 函数 获取数组迭代器
    let arr = [1, 2, 3, 4, 5]
    let iterator = arr.entries()
    console.log('Array entries Result:\n', iterator.next()) 
}

{ // Array every 函数 不改变数组 测试数组是否满足某种要求
  // 回调函数执行2次
  function isBigEnough(element, index, array) {
    return (element >= 18);
  }
  let passed = [12, 5, 8, 130, 44].every(isBigEnough)
  console.log('Array every Result:\n', passed) 

}

{ // Array fill 函数 改变源数组 用一个值，覆盖填充现有数组的值
  let numbers = [1, 2, 3]
  numbers.fill(4)
  
  let numbers2 = [1, 2, 3]
  numbers2.fill(4, 1)

  let numbers3 = [1, 2, 3]
  numbers3.fill(4, 1, 2)

  console.log('Array fill Result:\n', numbers)
  console.log('Array fill Result:\n', numbers2)  
  console.log('Array fill Result:\n', numbers3)  
}

{ // Array filter 函数 返回新数组 过滤数组中不满足条件的值
  let spraed = [12, 5, 8, 130, 44] 
  let result = spraed.filter(value => value >= 10)
  console.log('Array filter Result:\n', result)  
}

{ // Array findIndex 返回数组中满足条件的第一个元素下标,不存在返回-1
  let spraed = [12, 5, 8, 130, 44]
  let result = spraed.findIndex(element => element >= 15) // 3
  console.log('Array findIndex Result:\n', result)
}

{ // Array includes 返回boolen值 判断数组是否包含指定的值
  let spraed = [12, 5, 8, 130, 44]
  let result = spraed.includes(130)
  console.log('Array includes Result:\n', result)
}

{ // Array indexOf 返回在数组中找到一个给定元素的第一个索引，如果不存在，则返回-1。
  let spraed = [12, 5, 8, 130, 44]
  let result = spraed.indexOf(8, 0)
  console.log('Array indexOf Result:\n', result)
}

{ // Array join 用指定字符连接数组 返回连接后的字符串
  let spraed = ['Wind', 'Rain', 'Fire']
  let result = spraed.join('+')
  console.log('Array join Result:\n', result)
}

{ // Array keys 返回一个新的Array迭代器，它包含数组中每个索引的键
  let arr = ["a", "b", "c"]
  let iterator = arr.keys()
  console.log('Array keys Iterator:\n', iterator.next())
  console.log('Array keys Iterator1:\n', iterator.next())
}


{ // Array lastIndexOf 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1
  // 参数 searchElement 被查找的元素
  // 参数 fromIndex 不传从后向前查找，无论传正数还是负数都是从后向前查找
  let array = [2, 5, 9, 2]
  let result = array.lastIndexOf(2)
  console.log('Array lastIndexOf Result:\n', result)

  const indices = [];
  const list = ['a', 'b', 'a', 'c', 'a', 'd']
  const element = 'a'
  let idx = list.lastIndexOf(element)

  while (idx != -1) {
    indices.push(idx)
    idx = (idx > 0 ? list.lastIndexOf(element, idx - 1) : -1)
  }
  console.log('Array lastIndexOf AllElementsIndex:\n', indices)
}


{ 
  let numbers = [1, 5, 10, 15]
  let doubles = numbers.map((x) => {
   return x * 2
  })
  let numbers1 = [1, 4, 9]
  let roots = numbers1.map(Math.sqrt) // 直接传入Math函数，操作数组中的每一个参数得出运算后的结果
  console.log('Array map Result:\n', doubles)
  console.log('Array map sqrt:\n', roots)
}

{ // Array reduce 返回函数累计处理的结果
  // 参数 callback
  // accumulator 上一次调用回调返回的值
  // currentValue 数组中正在处理的元素
  // currentIndex 数据中正在处理的元素索引，如果提供了 initialValue ，从0开始；否则从1开始
  // array 调用 reduce 的数组
  // initialValue accumulator 取值为 initialValue的类型
  let total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 0)
  Log('Array reduce Total:\n', total)

  var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

  let countedNames = names.reduce(function (allNames, name) { 
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  },{})
  Log(countedNames)

  let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

  let allbooks = friends.reduce(function(prev, curr) {
    return [...prev, ...curr.books];
  }, ['Alphabet'])
  
  Log(allbooks)
  
}


{ // Array reduceRight 与 Array reduce执行方向相反
  let flattened = [
    [0, 1], 
    [2, 3], 
    [4, 5]
  ].reduceRight((a, b) => {
    return a.concat(b);
  }, [])

  Log('Array reduceRight Result:\n', flattened)

}

{ // Array reverse 源数组改变 方法将数组中元素的位置颠倒
  let myArray = ['one', 'two', 'three']
  myArray.reverse()
  Log('Array reverse Result:\n', myArray)
}

{ // Array shift 源数组改变 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
  let a = [1, 2, 3]
  let b = a.shift() // 1
  Log('Array shift Result:\n', a)
}

{ // Array slice 不改变源数组 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象
  let a = [1, 2, 3, 4]
  let sliced = a.slice(1, 3)
  Log('Array slice Result:\n', sliced)
}

{ // Array some 返回bool 方法测试数组中的某些元素是否通过由提供的函数实现的测试
  let textArr = [2, 5, 8, 1, 4]
  const isBiggerThan10 = textArr.some((element, index, array) => {
    return element > 10
  })
  Log('Array some Result:\n', isBiggerThan10)
}

{ // Array splice 方法通过删除现有元素和/或添加新元素来更改一个数组的内容
  // 参数 
  // start​ 开始位置
  // deleteCount option 整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素
  // item1, item2, ... 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素
  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
  myFish.splice(0, 0, 'drum')
  Log('Array splice Result:\n', myFish)
}

{ // Array splice 方法通过删除现有元素和/或添加新元素来更改一个数组的内容
  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
  myFish.splice(0, 0, 'drum')
  Log('Array splice Result:\n', myFish)
}

{ // Array toLocaleString 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串
  const number = 1337
  const date = new Date()
  const myArr = [number, date, "foo"]

  let str = myArr.toLocaleString()
  Log('Array toLocaleString Result:\n', str)

}

{ // Array toString 返回一个字符串，表示指定的数组及其元素

  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr']
  let myVar = monthNames.toString() // 默认用（,）连接monthNames
  Log('Array toString Result:\n', myVar)

}

{ // Array unshift 改变源数组 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
  let a = [1, 2, 3]
  a.unshift(4, 5)
  Log('Array unshift Result:\n', a)
}




