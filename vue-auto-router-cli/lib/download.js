// 初始化项目的本质就是从gitlab上下载一个项目模板到本地。
// （1）新建/lib/download.js文件，实现下载模板
const {promisify} =  require('util')
module.exports.clone = async function(repo,desc){
    const download = promisify(require('download-git-repo'))
    // const ora = require('ora')
    // const process = ora('')
    await download(repo,desc);

}
