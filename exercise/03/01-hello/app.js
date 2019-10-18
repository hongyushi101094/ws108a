const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)//ctx.url=檔案名稱+後面參數
  ctx.body = 'Hello World';//取得Hello World
});

if (!module.parent) app.listen(3000);
console.log('server run at http://localhost:3000/')
