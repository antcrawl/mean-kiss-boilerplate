var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var loginSchema = new schema({
    username: String,
    password: String
});

module.exports = mongoose.model('login', loginSchema);