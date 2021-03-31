const News = require('../models/news-model')

createNews = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a news',
        })
    }

    const news = new News(body)

    if (!news) {
        return res.status(400).json({ success: false, error: err })
    }

    news
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: news._id,
                message: 'News created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'News not created!',
            })
        })
}

updateNews = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    News.findOne({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'News not found!',
            })
        }
        news.name = body.name
        news.time = body.time
        news.rating = body.rating
        news
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: news._id,
                    message: 'News updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'News not updated!',
                })
            })
    })
}

deleteNews = async (req, res) => {
    await News.findOneAndDelete({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }

        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

getNewsById = async (req, res) => {
    await News.findOne({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

getNews = async (req, res) => {
    await News.find({}, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

module.exports = {
    createNews,
    updateNews,
    deleteNews,
    getNews,
    getNewsById,
}
