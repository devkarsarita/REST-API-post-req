const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")   /* this method return promise */
.then(()=>console.log("connection successful..."))
.catch((err) => console.log("no connection"));
