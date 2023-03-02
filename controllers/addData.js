const mongoose = require("mongoose");
const busModel = require("../models/busData");
mongoose.connect("mongodb://0.0.0.0:27017/busData");

const busNum = "KL54N8140";

addBusDataFunc();
async function addBusDataFunc() {
    try {
        const checker = await busModel.findOne({ busNum: busNum });
        if (!checker) {
            const busData = new busModel({
                busNum: busNum,
                busName: "Sindhooram",
                route: [
                    {
                        time: "18:58",
                        stop: "ernankulam",
                    },
                    {
                        time: "19:58",
                        stop: "thrissur",
                    },
                    {
                        time: "20:58",
                        stop: "edappal",
                    },
                    {
                        time: "21:58",
                        stop: "kozhikode",
                    },
                ],
                currentStop: {
                    name: "thrissur",
                    updatedTime: "17:59",
                },
                lefttoright: true,
            });

            await busData.save();
            console.log(busData);
        } else {
            console.log(`${busNum} is already there`);
        }

        // console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
    } catch (error) {
        console.log(error.message);
    }
}
