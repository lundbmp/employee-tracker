const { application } = require('express');
const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ exprended: false }));
app.use(express.json());



// connect to database THEN start server
db.connect(err => {
    if(err) throw err;
    console.log('Database connected...');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`);
    })
});