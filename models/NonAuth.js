const mongoose = require('mongoose')

const NonAuthSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('NonAuth', NonAuthSchema)
