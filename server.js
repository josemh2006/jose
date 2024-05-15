// El programa se corre con 'npm start'

// Fuente: https://www.youtube.com/watch?v=jynuHnIziuw&ab_channel=Inform%C3%A1ticaDP

const express= require('express');
const app= express();
const path = require('path');
const cors = require('cors');

app.use(cors());

// settings
/*app.set('port', process.env.PORT || 3000);   'Alt+124' es para la barra vertical  */

app.use(express.static(path.join(__dirname, 'public')));
/*app.use(express.static(path.join(__dirname, '/public/css'))); */
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));
/*app.use(express.urlencoded({extended: false})); */ //Esto es para que que el servidor pueda entender los datos que vienen desde los formularios del navegador
												// False: significa que solamente aceptara textos y no imagenes

// middlewares


// Routes
app.use(require('./routes/index'));
 

/*app.listen(app.get('port'), ()=> {

	console.log("Servidor en puerto 3000");
}) */


const PORT = process.env.PORT || 3000;  // 'Alt+124' es para la barra vertical
app.listen(PORT, () => console.log(`Servidor Corriendo en Puerto: ${PORT}`)); 