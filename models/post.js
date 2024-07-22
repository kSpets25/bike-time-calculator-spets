const mongoose = require("mongoose")

const schema = mongoose.Schema({
    distance: {
        type: Number, 
        require: true
    },
    speed: {
        type: Number,
        require: true
    },
    time: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Post", schema)