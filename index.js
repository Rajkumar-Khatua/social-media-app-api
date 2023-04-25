const express = require("express")  // create express
const app = express()   // Create App Entry Point
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
// user routes
const userRoute = require("./routes/users")
// Auth routes
const authRoute = require("./routes/auth")
// Post routes
const postRoute = require("./routes/posts")

// use dotenv file
dotenv.config();

// Mongoose Connections String
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongoDB is Connected!")).catch(err => console.log(err));



// MiddleWare
app.use(express.json())
app.use(helmet())
app.use(morgan("Common"))

// home Page
// app.get("/", (req, res) => {
//     res.send("Wellcome to Home page!")
// })

// home Page
// app.get("/users",(req,res) =>{
//     res.send("Wellcome to Users page!")
// })

// this are entry point of all pages
// User Route
app.use("/api/users", userRoute)
// Auth Route
app.use("/api/auth", authRoute)
// Post Route
app.use("/api/posts", postRoute)



// start the app by port number
app.listen(5500, () => {
    console.log("Backend Server is running")
})