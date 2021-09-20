(async () => {
    const mysql = require('mysql2/promise')
    const cfg = {
        host:"localhost",
        user:'root',
        paswword:'example',
        database:'kaikeba'
    }
    const connection = await mysql.createConnection(cfg)
    let ret = await connection.execute(`CREATE TABLE IF NOT EX`)

})()
