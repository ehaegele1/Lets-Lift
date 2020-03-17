
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//////middleware////////
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



const workoutController = require('./controllers/lift.js');

app.use('/lift', workoutController);



////listening//////
app.listen(3000, () => {
    console.log('listening');
})
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('The connection with mongod is established');
});
