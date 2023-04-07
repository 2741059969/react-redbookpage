import axios from 'axios'
//一个函数，返回一个请求得到的响应promise对象
export const getIdea = () => 
    axios.get(`https://www.fastmock.site/mock/a4b2da993ea54ed1ba5098e058832828/beers/redbook`)
    
