const Log = require('./Log.js').Log
// Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数
{
  let utc = Date.UTC(96, 11, 1, 0, 0, 0)
  Log('Date UTC() Result:\n', utc)
}
// Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
{
  let timeInMs = Date.now()
  Log('Date now() Result:\n', timeInMs)
}
// 根据本地时间，返回一个指定的日期对象为一个月中的第几天。
{
  let Xmas95 = new Date("December 25, 1995 23:15:00")
  let day = Xmas95.getDate()
  Log('Date getDate() Result:\n', day); // 25
}
// getDay() 方法根据本地时间, 返回具体星期几
{
  let Xmas95 = new Date("December 25, 1995 23:15:00")
  let weekday = Xmas95.getDay()
  Log('Date getDay() Result:\n', weekday);
}
// getFullYear() 方法根据本地时间返回指定日期的年份。
{
  let today = new Date()
  var year = today.getFullYear()
  Log('Date getFullYear() Result:\n', year);
}
// getHours() 方法根据本地时间，返回一个指定的日期对象的小时。
{
  let Xmas95 = new Date("December 25, 1995 23:15:00")
  let hours = Xmas95.getHours()
  Log('Date getHours() Result:\n', hours)
}
// getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。
{
  let ms
  Today = new Date();
  ms = Today.getMilliseconds()
  Log('Date getMilliseconds() Result:\n', ms)
}
// getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。
{
  let Xmas95 = new Date("December 25, 1995 23:15:00")
  let Minutes = Xmas95.getMinutes()
  Log('Date getMinutes() Result:\n', Minutes)
}

// getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。
{
  let Xmas95 = new Date("December 25, 1995 23:15:00")
  let Seconds = Xmas95.getSeconds()
  Log('Date getSeconds() Result:\n', Seconds)
}

// getTime 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
{
  let end, start, i
  start = new Date()
  for (i = 0; i < 100; i++) {
    Math.sqrt(i)
  }
  end = new Date()
  console.log("Date getTime() Operation took " + (end.getTime() - start.getTime()) + " msec")
}
// setDate() 方法根据本地时间来指定一个日期对象的天数。
{
  let theBigDay = new Date(1962, 6, 7) // 1962-07-07
  theBigDay.setDate(24) // 1962-07-24
  theBigDay.setDate(32) // 1962-08-01
  theBigDay.setDate(0) // 0，那么日期就会被设置为上个月的最后一天 1962-07-30
  Log('Date setDate() Result:\n', theBigDay)
}
// setFullYear() 方法根据本地时间为一个日期对象设置年份。
{
  let theBigDay = new Date()
  theBigDay.setFullYear(1997)
  theBigDay.setFullYear(1997, 15, 20)
  Log('Date setFullYear() Result:\n', theBigDay)
}
// setHours() 方法根据本地时间为一个日期对象设置小时数.
{
  let theBigDay = new Date()
  theBigDay.setHours(15)
  Log('Date setHours() Result:\n', theBigDay)
}
// setMilliseconds() 方法会根据本地时间设置一个日期对象的豪秒数。
{
  let theBigDay = new Date()
  theBigDay.setMilliseconds(100)
  Log('Date setMilliseconds() Result:\n', theBigDay)
}

// setMinutes() 方法根据本地时间为一个日期对象设置分钟数。
{
  let theBigDay = new Date()
  theBigDay.setMinutes(45)
  Log('Date setMinutes() Result:\n', theBigDay)
}
// setMonth() 方法根据本地时间为一个设置年份的日期对象设置月份。
{
  let theBigDay = new Date()
  theBigDay.setMonth(5)
  Log('Date setMonth() Result:\n', theBigDay)
}
// setSeconds() 方法根据本地时间设置一个日期对象的秒数。
{
  let theBigDay = new Date()
  theBigDay.setSeconds(5)
  Log('Date setSeconds() Result:\n', theBigDay)
}
// setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。
{
  let theBigDay = new Date("July 1, 1999")
  let sameAsBigDay = new Date()
  sameAsBigDay.setTime(theBigDay.getTime())
  Log('Date setTime() Result:\n', sameAsBigDay)
}

// toDateString() 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。
{
  let d = new Date(1993, 6, 28, 14, 39, 7);
  // Log(d.toString());     // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
  Log('Date toDateString() Result:\n', d.toString(), d.toDateString())
}
// toISOString() 方法返回一个ISO格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
{
  let d = new Date(1993, 6, 28, 14, 39, 7);
  // Log(d.toString());     // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
  Log('Date toISOString() Result:\n', d.toISOString())
}
// toJSON() 方法返回 Date 对象的字符串形式。
{
  let date = new Date() 
  let jsonDate = date.toJSON()
  Log('Date toJSON() Result:\n', jsonDate)
  var backToDate = new Date(jsonDate)
  // console.log(backToDate) //Thu Nov 09 2017 18:54:04 GMT+0800 (中国标准时间)
}
// toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。
{
  let d = new Date(1993, 6, 28, 14, 39, 7)
  Log('Date toLocaleDateString() Result:\n', d.toLocaleDateString()) // → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
}
// toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。
{
  let d = new Date(1993, 6, 28, 14, 39, 7)
  Log('Date toLocaleString() Result:\n', d.toLocaleString()) // 如果是在en-US区域和America/Los_Angeles时区运行返回值为"12/11/2012, 7:00:00 PM"
}

// toLocaleTimeString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。
{
  let d = new Date(1993, 6, 28, 14, 39, 7)
  Log('Date toLocaleTimeString() Result:\n', d.toLocaleTimeString()) // 如果是在en-US区域和America/Los_Angeles时区运行返回值为7:00:00"
}
// toString() 方法返回一个字符串，表示该Date对象。
{
  let x = new Date()
  Log('Date toString() Result:\n', x.toString())
}

// toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。
{
  let x = new Date()
  Log('Date toTimeString() Result:\n', x.toTimeString())
}

// toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。
{
  let x = new Date()
  Log('Date toUTCString() Result:\n', x.toUTCString())
}
// valueOf() 方法返回一个 Date 对象的原始值。
{
  let x = new Date(56, 6, 17)
  Log('Date valueOf() Result:\n', x.valueOf())
}