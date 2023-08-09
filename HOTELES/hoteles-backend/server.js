const express = require('express')
const app = express()

// Importar conexión MongoDB
const archivoBD = require('./conexion')

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js Corriendo...')
})

//Configuración de server
app.listen(5000, function(){
    console.log('El servidor está corriendo correctamente')
})