const express = require('express')
const router = express.Router()
const Controller = require('../Controller/Client.Controller.js')


router.post('/', Controller.create)
router.get('/:id', Controller.get)
router.get('/', Controller.list)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

module.exports = router