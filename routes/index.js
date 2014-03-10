
/*
 * GET home page.
 */


var mongoose = require('mongoose');
var setupDB = require('../config/databaseConfig')(),
    notesModels = require('./Models/notesModels');
var userModel = mongoose.model('User', notesModels.usersSchema);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.home = function(req, res){


	res.render('home', {title:'Notes'});
};

exports.createUser = function(req, res){
    var testUser = new userModel({
        userName:'vikram',
        password:'pass',
        userEmail:'v@g.com',
        affiliation:'GSU'
    });
    testUser.save(function(err){
        if(err) throw err;
    });
    res.render('loginForm', {title:testUser.userName});
};

exports.loginUser = function(req, res){
    console.log(req.body.userName);
    console.log('asdfasdf'+ req.body.password);
  userModel.find({userName:req.userName}, function(err){
      throw err;
  });
};

exports.login = function(req, res){
	res.render('loginForm', {title:'Notes'});
};

//059801512589
//icici mindspace
