//使用mockjs来mock接口
import Mock from 'mockjs'
//引入json文件，得到对呀的数据
import banners from './banners'
import floors from './floors'
import todayimgs from './todayimgs'

//模拟返回banners数据接口
Mock.mock('/mock/banners',{code:200,data:banners})
//模拟返回floors数据接口
Mock.mock('/mock/floors',{code:200,data:floors})
Mock.mock('/mock/todayimgs',{code:200,data:todayimgs})

// console.log('mock........')