#! /usr/bin/env node

const program = require('commander');
const version = require('../package').version;

program
    .version(version, '-v, --version')
    .usage('<command> [options]')
    .command('init', '初始化一个空项目')
    .parse(process.argv);