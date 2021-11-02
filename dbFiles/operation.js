const config = require('./config'),
    sql = require('mssql')

const getInfo = async (firstname)=>{
    try {
        let pool = await sql.connect(config)
        let tableInfo = await pool.request().query(`SELECT * FROM NewAge WHERE name = '${firstname}'`)
        return tableInfo
    }catch(e){
        console.log(e)
    }
}
module.exports ={
    getInfo
}

const createInfo = async (person)=>{
    try {
        let pool = await sql.connect(config)
        let tableInfo = await pool.request()
            .query( `INSERT INTO NewAge VALUES 
                    (${person.id},'${person.name}','${person.last}', ${person.age},'${person.city}')`)
        return tableInfo
    }catch(e){
        console.log(e)
    }
}
module.exports ={
    createInfo,
    getInfo
}