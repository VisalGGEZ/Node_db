/**
 * Created by Visal on 7/4/2017.
 */
var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000
var db = require('./db')

app.post('/user', function (req, res) {
    var firstName = req.param('firstName')
    var lastName = req.param('lastName')
    var age = req.param('age')

    db.user.create({
        first_name: firstName,
        last_name: lastName,
        age: age
    }).then(function (user) {
        console.log(user)
        res.json(user)
    })
})

app.put('/user', function (req, res) {
    var fname = req.param('firstName')
    var lName = req.param('lastName')

    db.user.update(
        {last_name: 'ddfdfdf'},
        {where: {_id: 1}}
    ).then(function (user) {
        res.json(user)
    })
})

// db.sequelize.sync({force:true}).then(function () {
//     console.log("Database starts sync...!")
// })

app.listen(PORT, function () {
    console.log('Server started at port: ' + PORT)
})
