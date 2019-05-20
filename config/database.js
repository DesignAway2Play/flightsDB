var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', function() {
        console.log(`Connectoed to MongoDB at ${db.host}:${db.port}`);
})
