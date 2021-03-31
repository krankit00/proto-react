const express = require('express')

const NewsCtrl = require('../controllers/news-ctrl')

const router = express.Router()

router.post('/news', NewsCtrl.createNews)
router.put('/news/:id', NewsCtrl.updateNews)
router.delete('/news/:id', NewsCtrl.deleteNews)
router.get('/news/:id', NewsCtrl.getNewsById)
router.get('/news', NewsCtrl.getNews)

module.exports = router
