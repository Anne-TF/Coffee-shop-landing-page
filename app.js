const express = Require('Express');
const app = express();

app.use(express.static(__dirname);

var server=app.listen(8888,function(){
    console.log('Servidor web iniciado');
});
