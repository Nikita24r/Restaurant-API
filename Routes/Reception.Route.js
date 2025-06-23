const express = require('express')
const router = express.Router()
const {verifyAccessToken} = require('../helpers/jwt_helpers')
const Controller = require('../Controller/Reception.Controller.js')

router.post('/', verifyAccessToken, Controller.create)
router.put('/:id',verifyAccessToken, Controller.update)
router.delete('/:id',verifyAccessToken, Controller.delete)
router.get('/:id', Controller.get)
router.get('/', Controller.list)

module.exports = router