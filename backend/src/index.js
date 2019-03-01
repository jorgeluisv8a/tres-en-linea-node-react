const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes')
const app = express()

require('./database')

// Setting
app.set('port', process.env.PORT || 3000)
//app.use(express.static(__dirname + '/views'))

// Static files
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

//Configure body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Routes
app.use('/api', apiRoutes)

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})