import express from 'express'


const app = express()
app.use(express.json())

function buscaEl(id) {
  return database.findIndex((el) => el.id == id)
}
