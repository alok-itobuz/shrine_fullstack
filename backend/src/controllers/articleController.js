import articles from '../devData/articles.js'

export const getArticles = (req, res) => {
    res.status(200).json(articles)
}