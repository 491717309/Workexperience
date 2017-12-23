//1.处理对象多级属性不报错方法
const safeGet = (data, path) => {
  var list = path.split('.')
  for(let i=0;i<list.length;i++){
    if(data[ list[i] ]){
      data = data[ list[i] ]
    }else{
      data = undefined
      break
    }
  }
  return data
}
//2.把一个字符串中所有的 : 到 . 的子串解析出来并且存放到一个数组当中
const extractStr = (str) => {
  var R = /\:+(\w*)\.+/g
  var data =  []
  var fag = R.exec(str)
  while(fag){
    data.push(fag[1])
    fag = R.exec(str)
  }
  return data
}
//3.
