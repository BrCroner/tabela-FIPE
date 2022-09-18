import XLSX from 'xlsx'
import Tabela from '../models/tabelaModel.js'

const postAddTable = (async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const email = req.body.email
  const type = req.body.type
  // 1 - Converter arquivo .xls ou .xlsx em JSON
  const filePath = req.file.path
  const readFile = XLSX.readFile(filePath)

  const file = {}
  for(const sheetName of readFile.SheetNames) {
    file[sheetName] = XLSX.utils.sheet_to_json(readFile.Sheets[sheetName])
  }
  // 2 - Adicionar itens ao Banco de Dados MySQL
  Tabela.create({
    id: id,
    name: name,
    email: email,
    type: type,
    file: file
  })
  .then(result => console.log(result))
  .catch(err => console.log(err))
})

const getTables = (async (req, res) => {
  // 1 - Busca todos os itens no Banco de Dados MySQL
  const data = await Tabela.findAll()
  console.log(data)
  res.json(data)
})

export { postAddTable,  getTables }