
// i use postman for cheack //


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');


const Tech = require('./TechScheme')
mongoose.connect('mongodb://localhost:27017',{dbName:"svCollegeTest"});

const handleGetAll = require('./controllers/GetAll')
const FilterData = require('./controllers/FillterData')
const AddData = require('./controllers/addData')

const app = express()


app.use(express.json())

app.use(cors())

app.get('/getAll',handleGetAll(Tech))
app.post('/fillterData',FilterData(Tech))
app.post('/addData',AddData(Tech))

app.listen(3001,()=> {
    console.log('server is running')
})