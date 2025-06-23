const createError = require('http-errors')
const Model = require('../Models/Restaurant.Model.js')
const mongoose = require('mongoose')
const ModelName = 'Restaurant'

module.exports = {
  create: async (req, res, next) => {
    try {
      const data = req.body
      const newData = new Model(data)
      const result = await newData.save()
      res.json(result)  // Send the saved data response
    } catch (error) {
      next(error)
    }
  },

  get: async (req, res, next) => {
    try {
      const { id } = req.params
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw createError.BadRequest('Invalid or missing ID')
      }
      const result = await Model.findById(id)
      if (!result) {
        throw createError.NotFound(`No ${ModelName} Found`)
      }
      res.send({ success: true, data: result })
    } catch (error) {
      next(error)
    }
  },

  list: async (req, res, next) => {
    try {
      const result = await Model.find();
      return res.json(result)
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const data = req.body

      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw createError.BadRequest('Invalid or missing ID')
      }
      if (!data) {
        throw createError.BadRequest('No update data provided')
      }
      data.updated_at = Date.now()
      const result = await Model.updateOne({ _id: id }, { $set: data })
      res.json(result)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw createError.BadRequest('Invalid or missing ID')
      }
      const result = await Model.findByIdAndDelete(id)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}