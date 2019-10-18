const Koa = require('koa');
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx){
  const fpath = path.join(__dirname, ctx.path);
  const fstat = await fs.promises.stat(fpath);
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    console.log('ext=', ext)
    if (ext === '.md') {
      let md = await fs.promises.readFile(fpath, 'utf8')//將檔案讀取後轉換成字串
      let html = mdit.render(md)
      ctx.type = '.html'//副檔名的檔案形式
      ctx.body = html//取得一個有body的欄位
    } else {
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath)
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}
