const http = require('http');
const settings = require('./settings.json');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { bot: settings.website });
})

app.get('/commands', (req, res) => {
    res.render('commands', { bot: settings.website })
})

const listener = server.listen(443, function() {
    console.log(`App loaded on port ${listener.address().port}`)
})
