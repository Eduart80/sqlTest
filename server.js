const express = require('express'),
    dbOperation = require('./dbFiles/operation'),
    cors = require('cors')

dbOperation.getInfo().then(res => {
    console.log(res)
})