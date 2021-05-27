const express = require('express')
const router = express.Router()
const phoneData = require('../../reto_web-main/phones.json')

// Endpoints
router.get('/phones', (req, res) => res.json(phoneData))


module.exports = router
