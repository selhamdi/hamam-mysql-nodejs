const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

app.use(cors())
require('dotenv/config');
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const clientRoute = require('./routes/client');
app.use('/client', clientRoute);

const reservationRoute = require('./routes/reservation');
app.use('/reservation', reservationRoute);

const adminRoute = require('./routes/admin');
app.use('/admin', adminRoute);


mongoose.connect('mongodb://localhost/ha', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(console.log('connected'))
.catch(err=>{
  console.log(err);
})

app.listen(3000);