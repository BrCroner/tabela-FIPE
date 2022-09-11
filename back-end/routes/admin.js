// Import
import express from 'express'
import { postAddTable } from '../controllers/tabelaFIPE.js'

const router = express.Router()

// Todas as rotas administrativas

// /add-table => POST
router.post('/add-table', postAddTable);
// /tabela-fipe => GET
// router.get('/tabela-fipe', getAllTables)

export default router
