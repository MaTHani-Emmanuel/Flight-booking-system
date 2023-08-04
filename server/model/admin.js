const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const admindb = mongoose.model("admindb", adminSchema);

module.exports = admindb;