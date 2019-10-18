const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const path = require('path')

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path)
  console.log(' ctx.path=', ctx.path)//我們在網址裡要求的資料夾EX:READ.md
  console.log('__dirname=', __dirname)//程式所在資料夾
  console.log('fpath=', fpath)//程式所有的路徑(不只是初始的路徑)，fpath=ctx.path+_dirname
  const fstat = await fs.promises.stat(fpath)
  console.log('fstat=', fstat)//程式的屬性資料
  if (fstat.isFile()) {
    ctx.type = path.extname(fpath)
    console.log('ctx.type=', ctx.type)//副檔名的檔案形式
    ctx.body = fs.createReadStream(fpath)
    console.log('ctx.body=',ctx.body)
  }
})

app.listen(3000)
console.log('server run at http://localhost:3000/')

