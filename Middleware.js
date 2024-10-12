const { userdb } = require("./db")




async function UserMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    const verify = await userdb.findOne({
        username: username,
        password: password

    })

    if (verify) {
        next()

    }
    else {
        res.json({
            msg: "user not found!"

        })
    }
}

module.exports = UserMiddleware;
