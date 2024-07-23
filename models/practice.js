const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const practiceSchema = new Schema({
    distance: {
        type: Number, 
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    calculatedTime: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('practice', practiceSchema);