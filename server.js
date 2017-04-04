var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set('port', 3000);


app.use(function( req, res, next ) {
    return res.sendFile(__dirname + '/index.html');
});

app.use(function( err, req, res, next ) {
    err = err.response || err;
    if ( !( err.status && ( err.status == 404 ) ) ) {
        console.log( err.stack );
        console.log( err.data );
    }
    res.status( err.status || 500 );
    res.json(err.data || err)
});

app.listen(app.get('port'), function(  ) {
    console.log( "Server running on port", app.get('port'));
});
