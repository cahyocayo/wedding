const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + '/view'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/attending', function(request, response){
    response.jsonp({ status: 'success' });
    console.log(request.body);
});

router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');