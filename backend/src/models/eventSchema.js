import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    date: {
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
    },
    location: {
        type: String
    },
    duration: {
        startTime: {
            type: String,
            default: '4:38'
        },
        endTime: {
            type: String
        }
    },
})


const Event = mongoose.model('Events', eventSchema)

export default Event