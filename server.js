import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import exphbs from 'express-handlebars';

const app = express();
const port = 3000;

// Para acceder a __dirname en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar el motor de plantillas
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// Ruta para la galería
app.get('/', (req, res) => {
    const images = [
        'imagenes/imagen1.jpg',
        'imagenes/imagen2.jpg',
        'imagenes/imagen3.jpg',
        'imagenes/imagen4.jpg',
        'imagenes/imagen5.jpg',
        'imagenes/imagen6.jpg',
        'imagenes/imagen7.jpg',
        'imagenes/imagen8.jpg',
        'imagenes/imagen9.jpg',
        'imagenes/imagen10.jpg',
        'imagenes/imagen11.jpg', 
        'imagenes/imagen12.jpg',
        'imagenes/imagen13.jpg',
        'imagenes/imagen14.jpg',
        'imagenes/imagen15.jpg',
    ];
    res.render('galery', { images });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
