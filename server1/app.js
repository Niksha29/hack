const mongoose = require('mongoose');
const collection = require("../server/mongo")
// const collection=require("../server/mongo.js")
const express = require("express")
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}));
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://nikhilsharma2024:nikhilsharma@cluster0.euzkw5r.mongodb.net/?retryWrites=true&w=majority');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }


app.get("/ninad", (req, res) => {
    res.send("Ninad here")
})

app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    
    if (username === 'Nikhil' && password === '123456') {
      res.json({ success: true, message: 'Authentication successful' });
    } else {
      res.json({ success: false, message: 'Authentication failed' });
    }
  });
//   app.post("/login", async (req, res) => {
//     const { username, password } = req.body

//     try {
//         const check = await collection.findOne({ username: username })

//         if (check) {
//             res.json("exist")
//         }
//         else {
//             res.json("notexist")
//         }
//     } catch (e) {
//         console.log(e)
//     }
// })


app.listen(port, () => {
    console.log(`Server is running on port is  ${port}`);
  });