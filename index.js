var express = require('express');
var app = express();

app.get('/echo', function (req, res) {
       console.log(req.headers);
       res.status(200);
       res.send(req.headers);
    });
 
 
app.listen(3000, () => {
    console.log("Server running on port 3000");
    });