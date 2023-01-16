import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

// Creación de la aplicación web en Nodejs con express
const app = express()

// Puerto de nuestra app web por defecto va a ser el 3000
app.listen (PORT)
console.log ('El servidor en el puerto 3000')

app.get ('/', async (req, res) => {
    // res.send ("Implantación aplicaciones web")
    const [result] = await pool.query (`SELECT * from  userdb.user`)
    res.json (result)
})
app.get ('/ping', async (req, res) => {
    res.send ("Implantación aplicaciones web")
    const [result] = await pool.query (`SELECT "Hola Hector" AS RESULT`)
    res.send (result[0])
})

app.get ('/create', async(req, res) => {
    const [insert] = await pool.query (`INSERT INTO userdb.user(name) VALUES ('Maria')`);
    console.log (insert)
});

