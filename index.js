"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const httpContext = require("express-http-context");
const fileUpload = require("express-fileupload");



const adminRoutes = require("./routes/admin_routes");
const cleanerRoutes = require("./routes/cleaner_routes");
const userRoutes = require("./routes/user_routes");
const businessAuth = require("./controller/business_auth");



const app = express();
app.use(bodyParser.json());
app.use(fileUpload());
app.use(httpContext.middleware);
const publicFolderPath = path.join(__dirname,"assests");
app.use(express.static(publicFolderPath));


// require("dotenv").config({path: path.join(__dirname,"environment",".env.development")});
// require("dotenv").config();

//Enable CORS for HTTP methods
app.use((req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*",);
    resp.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Authorization,Content-Type,Accept,cw_api_key");
    next();
});

//here this is used when we want to confirm backend server is running or not via browser.
app.get("/", (req, resp) => {
    resp.status(200).send("Welcome to Car Washing Backend APIs");
});



const port = process.env.PORT || 2000;
var server = app.listen(port, () => {
    console.log(`Server Started : Listen on : ${port}`)
})