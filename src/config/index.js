/* 
定义全局配置的模块
*/
// 当前是否是开发环境
export const IS_DEV = process.env.NODE_ENV==='development'

// 分页每页显示的数据条数
export const PAGE_SIZE = 5

// 图片的基础路径
export const BASE_IMAGE_URL = 'http://localhost:4000/upload/'

export const BASE_PATH = IS_DEV ? '' : '/api'