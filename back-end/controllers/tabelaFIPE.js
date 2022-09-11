import multer from 'multer'
import TabelaModel from '../models/tabelaModel.js'

const upload = multer({ dest: './add-table/' });

const postAddTable = (upload.array('file'), async (req, res) => {
  const tabela = new TabelaModel(req.body.name, req.body.email, req.body.type, req.body.file)
  console.log(req.body)
  res.send({ upload: true });
})
const getTables = (req, res) => {
  const tables = Tabela.fetchAll()
}

export { postAddTable,  getTables }