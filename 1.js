function debounce(fn,wait){
  let timer
  return function (){
    const _this = this
    const args = [...arguments]
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(_this,args)
    },wait)
  }
}

function fn(arr){
  const obj = {} // a:1 b:2
  let num = 0
  let maxKey = undefined
  arr.forEach(item=>{
    if(obj[item]){
      obj[item+Object.toString.call(item)] +=1 // '1'[Object String] 1[Object Number]
    }else{
      obj[item]  = 1
    }
  })
  Object.keys(obj).forEach(key=>{
    if(obj[key]>num){
      num = obj[key]
      maxKey = key
    }
  })
}
