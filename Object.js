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
  /*自定义map*/
  let obj = {}
  Object.defineProperties(obj, {
    property1 : {
      value: 1
    }
  })
  obj.property1 = 2
  console.log('Object defineProperties Result:\n', obj.property1)
}