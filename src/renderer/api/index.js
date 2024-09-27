// 接口文件
import request from './../http/request.ts'

//  测试 GET
export const getTest = (params) => {
  let url = 'https://thinkcmf.xinmam.com/api/digimon/index';
  return request.get(url, params)
}


