const ls = require('./ls');
const pwd = require('./pwd');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
	if (cmd[0] === 'pwd') pwd();
	else if (cmd[0] === 'ls') ls();
	else if (cmd[0] === 'cat') cat(cmd[1]);
	else if (cmd[0] === 'curl') curl(cmd[1]);
});
