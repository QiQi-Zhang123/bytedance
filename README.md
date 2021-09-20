##自定义CIL
###初始化项目
mkdir vue-auto-router-cli
cd vue-auto-router-cli
npm init-y
npm i commander download-git-repo ora handlebars figlet clear chalk open watch -s
###新建CLI命令文件：
新建vue-auto-router-cli/bin/kkb.js命令文件
###添加bin命令，修改package.json
{
"bin": {
"kkb": "./bin/kkb.js"
},
}
###链接命令：执行npm link，把命令链接到全局，相当于全局安装项目。
最后在命令行运行kkb，就会执行vue-auto-router-cli/bin/kkb.js命令文件。简答的cli命令工具就完成了。


##进阶1：在控制台打印个性化欢迎界面
此时执行kkb init xx，就会在控制台输出大子界面。

##进阶2：通过init命令初始化项目

