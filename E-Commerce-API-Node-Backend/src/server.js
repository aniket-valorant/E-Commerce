const app = require(".");
const { connectDb } = require("./config/db");
const PORT = 5454;

app.listen(PORT, async() => {
    await connectDb().then(() => console.log("Successfully connected to MongoDb"))
    console.log("E-Commerce api listening on PORT: ", PORT)
})  