import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: Boolean,
    // publisher: {
    //     type: mongoose.Schema.Types.ObjectId,
    // },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    }
})

articleSchema.pre(['find', 'findOne'], async function (next) {

    console.log(this.$where('title'))
    next()
})

const Article = mongoose.model('Article', articleSchema)

export default Article