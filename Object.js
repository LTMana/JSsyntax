const Log = require('./Log.js').Log


{ // Object assign  方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
  // *注意 assign函数只拷贝1层对象，无法拷贝属性值指向一个对象的引用
  let obj = {
    a: 1
  };
  let copyObj = {}
  Object.assign(copyObj, obj)
  console.log('Object copyObj Result:\n', copyObj)
}

{ // Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象。
  /*自定义map*/
  let map = Object.create(null)
  map.a = '1111'
  console.log('Object create Result:\n', map)
}


{ // Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
  let obj = {}
  Object.defineProperties(obj, {
    property1: {
      value: 1
    }
  })
  obj.property1 = 2
  console.log('Object defineProperties Result:\n', obj.property1)
}

{ // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
  let o = {}
  Object.defineProperty(o, "a", {
    value: 1,
    enumerable: true
  });
  Object.defineProperty(o, "b", {
    value: 2,
    enumerable: false
  });
  Object.defineProperty(o, "c", {
    value: 3
  }); // enumerable defaults to false
  o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true
  for (let key in o) { // enumerable 为false不可被枚举
    console.log('Object defineProperty Result:\n', key)
  }
}

{ // Object.entries() 方法返回一个给定对象自己的可枚举属性[key，value]对的数组，数组中键值对的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致
  let o = {
    foo: "bar",
    baz: 42
  }
  let map = new Map(Object.entries(o))
  Log('Object entries Result:\n', map)
}

{ // Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。
  let o = {
    foo: "bar",
    baz: 42
  }
  Object.freeze(o)
  Log('Object freeze Result:\n', o)
}

{ // Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
  let o = {
    foo: "bar",
    baz: 42
  }
  let d = Object.getOwnPropertyDescriptor(o, 'foo')
  Log('Object getOwnPropertyDescriptor Result:\n', d)
}

{ // Object.getOwnPropertyDescriptors() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
  let o = {
    foo: "bar",
    baz: 42
  }
  let d = Object.getOwnPropertyDescriptors(o)
  Log('Object getOwnPropertyDescriptors Result:\n', d)
}

{ // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
  let o = [2, 4, 5]
  let d = Object.getOwnPropertyNames(o)
  Log('Object getOwnPropertyNames Result:\n', d)
}

{ // Object.getOwnPropertySymbols() 方法会返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键。
  let obj = {};
  let a = Symbol("a");
  let b = Symbol.for("b");
  obj[a] = "localSymbol";
  obj[b] = "globalSymbol";
  let objectSymbols = Object.getOwnPropertySymbols(obj);
  Log('Object getOwnPropertySymbols Result:\n', objectSymbols.length, objectSymbols, objectSymbols[0])
}

{ // Object.getPrototypeOf() 方法返回指定对象的原型
  let proto = {};
  let obj = Object.create(proto);
  Log('Object getPrototypeOf Result:\n', Object.getPrototypeOf(obj) === proto)
}

{ // Object.is() 方法确定两个值是否是 相同的值
  Log('Object is Result:\n', Object.is('foo', 'foo'))
}

{ // Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）
  let empty = {},
    noExtens = {};
  Object.preventExtensions(noExtens);
  Log('Object isExtensible Result:\n', Object.isExtensible(empty), Object.isExtensible(noExtens))
}

{ // Object.isFrozen() 方法判断一个对象是否被冻结 frozen
  let o = {
    foo: "bar",
    baz: 42
  }
  Object.freeze(o)
  Log('Object isFrozen Result:\n', Object.isFrozen(o) === true)
}


{ // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 
  let o = {
    foo: "bar",
    baz: 42
  }
  Log('Object keys Result:\n', Object.keys(o))
}

{ // Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
  let o = {
    foo: "bar",
    baz: 42
  }
  Object.preventExtensions(o)
  o.dd = '2312'
  Log('Object preventExtensions Result:\n', o)
}

{ // hasOwnProperty() 方法会返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性
  let o = {
    foo: "bar",
    baz: 42
  }
  Log('Object hasOwnProperty Result:\n', o.hasOwnProperty('foo'), o.hasOwnProperty('dd'))
}

{ // isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
  function Foo() {}

  function Bar() {}
  Bar.prototype = Object.create(Foo.prototype);
  let baz = new Bar();
  Log('Object isPrototypeOf Result:\n', Bar.prototype.isPrototypeOf(baz), Foo.prototype.isPrototypeOf(baz))
}

{ // propertyIsEnumerable() 方法返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性
  let a = [1, 2, 3]
  Log('Object propertyIsEnumerable Result:\n', a.propertyIsEnumerable('propertyIsEnumerable'))
}

{ // toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖
  let o = {
    foo: "bar",
    baz: 42
  }
  Log('Object propertyIsEnumerable Result:\n', o.toLocaleString())
}

{ // valueOf() 方法返回指定对象的原始值(一般引擎都会自己调用)
  function myNumberType(n) {
    this.number = n;
  }
  myNumberType.prototype.valueOf = function () {
    return this.number;
  };
  let myObj = new myNumberType(4);
  Log('Object valueOf Result:\n', myObj)
}

{ // Object.seal() 方法可以让一个对象密封，并返回被密封后的对象。密封对象将会阻止向对象添加新的属性，并且会将所有已有属性的可配置性（configurable）置为不可配置（false），即不可修改属性的描述或删除属性。但是可写性描述（writable）为可写（true）的属性的值仍然被修改。
  let o = {
    foo: "bar",
    baz: 42
  }
  Object.seal(o)
  o.dd = '2312'
  delete o.foo
  o.foo = 'hahah'
  Log('Object seal Result:\n', o)
}

{ // Object.isSealed() 方法判断一个对象是否被密封(sealed)。
  let o = {
    foo: "bar",
    baz: 42
  }
  Object.seal(o)
  let a = {}
  Log('Object isSealed Result:\n', Object.isSealed(o), Object.isSealed(a))
}

{ // Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null (不建议使用影响性能，建议使用 Object.create()代替)
  let dict = Object.setPrototypeOf({}, null); // 建议使用下面的函数创建map
  let map = Object.create(null)
}

{ // Object.values()方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 
  let o = {
    foo: "bar",
    baz: 42
  }
  Log('Object values Result:\n', Object.values(o))
}