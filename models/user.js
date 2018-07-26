var mongoose = require('mongoose');
    passportLocalMongoose = require('passport-local-mongoose')
    Post = require('./post')

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
