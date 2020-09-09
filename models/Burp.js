const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurpSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Burp = mongoose.model('burp', BurpSchema);

module.exports = Burp;