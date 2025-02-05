const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://waniket011:soIYF19TRlpExFMx@cluster0.wuyui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(mongodbURL)
}

module.exports = {connectDb}