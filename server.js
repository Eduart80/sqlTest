const express = require('express'),
    dbOperation = require('./dbFiles/operation'),
    cors = require('cors'),
    persons = require('./dbFiles/persons')


const API_PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.post('/api', async (req,res) => {
    console.log('colled tomi')
    const result = await dbOperation.getInfo(req.body.name)
    res.send(result.recordset[0])
})
app.post('/hello', function (req,res){
    console.log('colled 2')
    res.send({result:'OMG hii'})
})

// let Pam = new persons( 3,'Pam','Molla', 30, 'Alb');

app.listen(API_PORT, ()=> {console.log(`Listening on port ${API_PORT}`) })