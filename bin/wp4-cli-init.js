const path = require('path');
const program = require('commander');
const ncp = require('ncp').ncp;
const ora = require('ora');
const merge = require('lodash/merge');
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

const error = chalk.bold.red;
const success = chalk.bold.green;

program
    .usage('[webpack4] [subDirName]')
    .parse(process.argv);

const tplName = program.args[0] || 'webpack4';
const projectName = program.args[1] || '';

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default() {
            return 'webpack4-template';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default() {
            return 'A webpack project';
        }
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author',
        default() {
            return 'Your Name <you@example.com>';
        }
    }
];

inquirer.prompt(questions).then(answer => {
    const dirPath = require.resolve('./wp4-cli.js');
    const tplPath = path.join(dirPath, '../..', 'templates', tplName);
    const projectPath = path.join(process.cwd(), projectName);
    let pkg = require(`${tplPath}/package.json`);
    pkg = merge(pkg, answer);

    const spinner = ora('initing').start();
    ncp(tplPath, projectPath, function (err) {
        if (err) {
            return spinner.fail('init failed');
        }
        spinner.succeed('init succeed');

        fs.writeFile(`${projectPath}/package.json`, JSON.stringify(pkg, null, 4), function (err) {
            if (err) {
                return console.log(error(err));
            }

            console.log(success('package.json created'));
        });
    });
});