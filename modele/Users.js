/**
 * Created by UpperSkills on 7/19/17.
 */
var mongoose = require ('mongoose')
    ,Schema = mongoose.Schema;
var User_schema = new Schema({
    firstName : { type : String , required :true },
    lastName : { type : String , required : true},
    email : { type : String , required : true , unique : true},
    password : { type : String , required : true},
    userPhoto :{type : String }

});
/*
 User_schema.pre('save', function (next) {
 var user = this;
 if (this.isModified('password') || this.isNew) {
 bcrypt.genSalt(10, function (err, salt) {
 if (err) {
 return next(err);
 }
 bcrypt.hash(user.password, salt, function(err, hash) {
 if (err) {
 return next(err);
 }
 user.password = hash;
 next();
 });
 });
 } else {
 return next();
 }
 });

 // Create method to compare password input to password saved in database
 User_schema.methods.comparePassword = function(pw, cb) {
 bcrypt.compare(pw, this.password, function (err, isMatch) {
 if (err) {
 return cb(err);
 }
 cb(null, isMatch);
 });
 };

 */

var Users = mongoose.model('User_schema', User_schema);
module.exports = {
    Users : Users
};