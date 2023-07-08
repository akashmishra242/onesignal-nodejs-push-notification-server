const express = require("express");
const app = express();
app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from the Node.js RESTful side!'
    })
  });

app.use(express.json());
app.use('/api',require('./routes/app.routes'));


// app.listen(process.env.port || 3000, function() {        // process.env.port is for heroku
    app.listen(3000, function() {        // process.env.port is for heroku
    console.log("Server is Ready to Go !");
});