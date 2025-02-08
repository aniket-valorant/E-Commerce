const app = require(".");
const mongoosh = require("./config/db.");
const PORT = 5454;

app.listen(PORT, async() => {
    await mongoosh.connectDb().then(() => console.log("Successfully connected to MongoDb"))
    console.log("E-Commerce api listening on PORT: ", PORT)
})  