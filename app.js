let express = require('express');
let path = require('path');

let app = express();


// Serve folder with app
app.use(express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(500);

    console.error(err);

    return res.json({
        message: err.message
    });
});

app.listen(7849, () => {
    console.log('Static backend started. Port: ', 7849);
});
