// IMPORTS
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connection from './database/database.js'
import adminRoutes from './routes/admin.js'

// Criar Express App
const app = express()
// Uso de CORS
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Acesso as rotas
app.use(adminRoutes)

// DATABASE + Subindo Servidor
connection.sync().then(result => {
  // Definindo a porta
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
  });
}).catch(err => console.log(err))
