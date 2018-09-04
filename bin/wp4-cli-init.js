// todo 拷贝现有文件
// todo webpack4模板配置走通

const path = require('path');

const program = require('commander');
const ncp = require('ncp').ncp;

program
    .parse(process.argv);

const tplName = program.args[0] || 'webpack4';
const projectName = program.args[1] || '';

const dirPath = require.resolve('./wp4-cli.js');

// 源模板的路径
const tplPath = path.join(dirPath, '../..', 'templates', tplName);

// 目标路径
const projectPath = path.join(process.cwd(), projectName);

ncp(tplPath, projectPath, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('init success!');
})