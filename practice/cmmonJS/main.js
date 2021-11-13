console.log('main.js开始执行')
let {num} = require('./a.js')
require('./b.js')
console.log(num,'num');
num=2
console.log('main.js执行完毕')
