const config = require('./config'),
    sql = require('mssql')

const getInfo = async ()=>{
    try {
        let pool = await sql.connect(config)
        let tableInfo = pool.request().query('SELECT * FROM NewAge')
        console.log(tableInfo)
        return tableInfo
    }catch(e){
        console.log(e)
    }
}
module.exports ={
    getInfo
}