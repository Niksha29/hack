const express = require("express")
const collection = require("./mongo.js")
const cors = require("cors")
const app = express()
const port = 8000;
app.use(express.json)
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const mongoose = require("mongoose");



const db ="mongodb+srv://nikhilsharma2024:nikhilsharma@cluster0.euzkw5r.mongodb.net/sampledatabase?retryWrites=true&w=majority"
mongoose.connect(db)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


app.get("/login", cors(), (req, res) => {
})


app.get("/ninad", cors(), (req, res) => {
    res.send("Ninad her")
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body

    try {
        const check = await collection.findOne({ username: username })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    } catch (e) {
        console.log(e)
    }
})




app.post("/signup", async (req, res) => {
    const { username, password } = req.body

    const data={
        username:username,
        password:password
    }

    try {
        const check = await collection.findOne({ username: username })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port is  ${port}`);
  });