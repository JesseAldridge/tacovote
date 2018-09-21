const request = require('request');

const find_block = require('find_block');

function init_test(block) {}

function test(block) {
  block.call();
  request('localhost:5000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return body == '<div><a href="foo">foo</a></div>';
    }
  });
}

function cleanup_test() {}
