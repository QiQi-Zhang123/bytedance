#! node
// windon 下的node全局存放地址
// 指定解释器类型为node
// console.log('kkb cli ...')
const program = require('commander')//命令行工具
program.version(require('../package.json').version)//或直接写
program.command('init <name>')//定义init命令
    .description('init project')
    .action(require('../lib/init'))//指定命令要做什么事，回调函数中实现命令功能

program.command('refresh')
    .description('refresh routers')
    .action(require('../lib/refresh'))
program.parse(process.argv)

