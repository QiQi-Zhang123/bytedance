const fs = require('fs')
const rs =fs.createReadStream('./image/rabbit.jpg')
const ws =fs.createWriteStream('./image/juhua.jpg')
rs.pipe(ws)

