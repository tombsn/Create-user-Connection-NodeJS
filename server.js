require('dotenv').config({path: './env'});
const app = require('./app');
const port = process.env.port;
const database = require('./config/database');

database.sync().then ( () => {
    //Server startup
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    });
})