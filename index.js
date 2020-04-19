const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//settings
app.set('port', 4000);
app.set('view engine', 'ejs');
//middlewares


//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));



//Listing the Server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
    //console.log(__dirname);
});