setTimeout(()=>{
  const result  = import('./b.js')
  result.then(res=>{
      console.log(res)
  })
},3000)
console.log('main.js开始执行')
import {obj} from './a.js'
import say1 from './b.js'
console.log(obj,'num');
obj.b=2
console.log(obj,'num');
console.log('main.js执行完毕')

