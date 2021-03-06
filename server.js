const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const path          = require('path');
const db            = require('./config/config');
const PORT          = process.env.PORT || 5000;
const passport      = require("passport");



//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('client/build'));

//passport
app.use(passport.initialize());
require("./config/passport");


//Db Connection
// const pool = mysql.createPool(db.db);
// pool.getConnection(function(err, connection) {
//     if (err) throw err; // not connected!

//     console.log("Connected to mysql!")
// })



//Define routes
app.use('/', require('./routes/'))

//Serve public files
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))