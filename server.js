const express = require('express');
const cors= require('cors')
require('dotenv').config();


const db= require('./database/database')
const staffRoute = require('./route/staffRoute')
const bodyParser = require('body-parser')

const port = process.env.port
const app = express();
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//routes
app.use('/api', staffRoute)



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
