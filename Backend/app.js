// dotenv
require("dotenv").config();
console.log(process.env.MONGO_URI)
// express 
const express = require("express")
const app = express()
// middelwares json 
app.use(express.json())
// simple logger
// ?process is represnet application 
if (process.env.NODE_ENV === "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    })
}
// route test
app.get("/test", (req, res) => {
    res.status(200).json({ msg: "test route " })
})
// connect db 
const connectDB = require("./config/db");
connectDB();
// port 
const port = process.env.PORT || 5000;
// run server
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})