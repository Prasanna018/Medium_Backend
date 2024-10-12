const express = require("express");
const { Postdb, userdb } = require("./db");
const UserMiddleware = require("./Middleware");

const app = express()
app.use(express.json())


app.post('/sign-in', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    userdb.create({
        username,
        password
    })

    res.json({
        msg: "user created successfully"

    })





})


app.post('/login', UserMiddleware, function (req, res) {
    res.json({
        msg: "you are logged in"

    })


})


app.post('/post_blog', UserMiddleware, function (req, res) {
    const title = req.body.title;
    const Description = req.body.Description;
    Postdb.create({
        title: title,
        Description: Description
    })
    res.json({
        msg: "Posted blog successfully"

    })

})

app.get("/view_blogs", UserMiddleware, async function (req, res) {
    const displayData = await Postdb.find({

    })
    res.json({
        displayData
    })



})


app.listen(3000, () => {



    console.log("server is running on the port 3000")
})

