const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    busNum: String,
    busName: String,
    route: [
        {
            time: String,
            stop: String,
            _id: false
        },
    ],
    // startPoint: String,   not needed right?
    // endPoint: String,     "
    currentStop: {
        name: String,
        updatedTime: String,
        _id: false
    },
    previousStop: {
        name: String,
        updatedTime: String,
        _id: false
    },
    lefttoright: Boolean,
    // password: String,
});

module.exports = new mongoose.model("busData", busSchema);
