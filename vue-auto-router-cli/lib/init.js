const {promisify} = require('util')//util 是一个node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能过于简单的不足

const figlet = promisify(require('figlet'))//util.promisify()这个方法，
// 方便快捷的把原来的异步回调方法改成放回Promise实例的方法

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))

const {clone} = require('./download')
const open = require('open')

const spawn = async (...args) => {
    const options = args[args.length- 1 ]
    if(process.platform == 'win32'){
        console.log('win32')
        options.shell = true
    }else {
        console.log('linux/Unix')
    }

    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        //输出流 子进程 合并 主进程
        proc.stdout.pipe(process.stdout)
        proc.stdout.pipe(process.stderr)
        proc.on('close',() => {
            resolve()
        })
    })
}



module.exports = async name => {
    // const ora = (await import('ora')).default
    // let ora_process

    //打印欢迎界面
    clear();
    const data= await figlet('kkb welcome')//figlet是把文字变成大字
    log(data)
//项目模板
//     ora_process = ora(`创建项目${name}`)
//     ora_process.start()
//     await clone('github:su37josephxia/vue-template', name)
    // ora_process.succeed()

    //下载依赖 npm -i
    // spawn('npm', ['install'])
    // ora_process = ora(`安装依赖...`)
    // ora_process.start()
    await spawn('npm', ['install'], {cwd: `./${name}`})
    // ora_process.succeed()

    log(`
初始化完成！
运行npm run serve开始开发
    `)
    await spawn('npm', ['run','serve'], {cwd: `./${name}`})
    // open("http:localhost:8080")
}


// const open = require('http://localhost:8080')
// await spawn('npm',[])

