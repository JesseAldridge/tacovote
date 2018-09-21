const request = require('request');

const find_block = require('find_block');

function init_test(block) {}

function test(block) {
  block.call();
  request('localhost:5000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return body == 'hello world';
    }
  });
}

function cleanup_test() {}

if(require.main === module) {
  console.log(find_block.find_block(init_test, test, cleanup_test));
}