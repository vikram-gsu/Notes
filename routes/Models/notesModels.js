var mongoose = require('mongoose'),
// bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var schema = mongoose.Schema;

exports.usersSchema = new schema({
    userName:{type:String, required:true, index:{unique:true}},
    password:{type:String, required:true},
    userEmail: {type:String, required:true},
    affiliation:{type:String}
});