const http = require('http');
const fs = require('fs');

const mustache = require('mustache');
const glob = require("glob");

const main_template_str = fs.readFileSync('main.html', 'utf8');
const article_paths = glob.sync("articles/*.json");
const id_to_article = {};
const article_list = [];
article_paths.forEach(function(article_path) {
  const article_str = fs.readFileSync(article_path);
  const article_obj = JSON.parse(article_str);
  id_to_article[article_obj.id] = article_obj;
  article_list.push(article_obj);
});

const server = http.createServer((req, res) => {
  const content_obj = {
    articles: article_list
  };

  console.log('content_obj:', content_obj);
  const main_html = mustache.render(main_template_str, content_obj);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(main_html);
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
