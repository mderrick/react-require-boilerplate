var express = require('express'),
    app = express(),
    path = require('path'),
    colors = require('colors');

app.set('port', process.env.PORT || 9001);

app.use('/', express.static(path.join(__dirname, '../www')));
app.use(function(req, res) {
    'use strict';
    res.sendFile('index.html', {
        root: path.join(__dirname, '../www')
    });
});

app.listen(app.get('port'), function() {
    'use strict';
    console.log('Environment: '.cyan + process.env.NODE_ENV);
    console.log('Server started: '.cyan +
        'http://localhost:' + app.get('port'));
    console.log('Press \'ctrl + c\' to terminate server'.grey);
});