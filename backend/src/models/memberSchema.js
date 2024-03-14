import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    socialHandles: {
        instagram: {
            type: String,
        },
        google: {
            type: String,
        },
        youtube: {
            type: String,
        },
    }
})

const Member = mongoose.model('Members', memberSchema)

export default Member