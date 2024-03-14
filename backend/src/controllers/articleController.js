import articles from '../devData/articles.js'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import Article from '../models/articleSchema.js'


export const getArticles = async (req, res) => {
    try {
        // res.status(200).json(articles)

        const articles = await Article.find({})
        res.status(StatusCodes.ACCEPTED).json({
            message: 'Success',
            data: {
                articles
            },
            status: ReasonPhrases.ACCEPTED,
        })

    } catch (error) {

    }
}