// Import
import express from 'express'
import multer from 'multer'
import { postAddTable, getTables } from '../controllers/tabelaFIPE.js'
import { storage } from '../middleware/multerConfig.js'

const router = express.Router()
const upload = multer({ storage: storage })

// Todas as rotas

// /add-table => POST
router.post('/add-table', multer(upload).single('file'), postAddTable)
// /tabela-fipe => GET
router.get('/tabela-fipe', getTables)

export default router
