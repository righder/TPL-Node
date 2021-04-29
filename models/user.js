var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
})

module.exports = mongoose.model('user', schema)