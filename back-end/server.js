// IMPORTS
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import connection from './database/database.js'
import adminRoutes from './routes/admin.js'

// Criar Express App
const app = express()
// Uso de CORS
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

// Acesso as rotas
app.use(adminRoutes)

/* 
/  DATABASE + Subindo Servidor
/  sync - Sincroniza itens com o Banco de Dados.
/  Caso a tabela não exista ela será criada.
/  force:false - Evita a sobreposição dos dados.
*/
connection.sync({force: false}).then(result => {
  // Definindo a porta
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🪄  Servidor escutando em http://localhost:${port}` );
  });
}).catch(err => console.log(err))
