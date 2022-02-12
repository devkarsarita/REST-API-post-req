const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());

// you do not need express.json() for get req and delete req.
//  only need it for post and put req.
// express.json() is a method inbuild in express to recognize the
// incoming req object as a json object.
 // this method is called middleware .
  //  use code :  app.use(express.json());




app.post("/students",(req, res) => {          /*/create a new students*/
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() => {
    res.status(201).send(user);
    }).catch((error) => {
    res.status(400).send(error);
    })
})

app.listen(port, () => {
  console.log("connection is setup on port 8000");
})
