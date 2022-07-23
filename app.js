const db = require('./config/connection');
// connect to database THEN start server
db.connect(err => {
    if(err) throw err;
    console.log('Database connected...');
});