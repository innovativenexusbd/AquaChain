const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    identityDocument: { type: String, required: true },
    approved: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
