
var mongoose = require('mongoose');
module.exports = function(){
    //TO:DO change localhost to openshift
    //connection to mongodb database on local system
    var db = mongoose.connect('localhost');

    //attach event listener to connected event
    mongoose.connection.once('connected', function() {
        console.log('connected to mongodb');
    });

    mongoose.connection.on('error', function(){
        console.log('error connecting to db');
    });

    mongoose.connection.on('disconnect', function(){
        console.log('db disconnected');
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('closing db connection');
            process.exit(0);
        });
    });
};