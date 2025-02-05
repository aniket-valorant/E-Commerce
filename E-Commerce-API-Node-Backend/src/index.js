const express = require('express')
const cors = require('cors')
const app = express()
const authRouters = require("./routes/auth.routes.js")
const userRouters = require("./routes/user.routes.js")

app.use(express.json())
app.use(cors())

app.get('/',(req, res) => {
    return res.send({message: "welcome to ecommerce api - node", status:true})
})

app.use("/auth", authRouters);
app.use("/api/users", userRouters);

module.exports = app;