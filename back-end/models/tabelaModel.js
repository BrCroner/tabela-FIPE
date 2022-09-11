import Sequelize from 'sequelize'
import connection from '../database/database.js'

const Tabela = connection.define('tabelafipe', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // file: {
  //   type: Sequelize.JSONB,
  //   allowNull: false
  // }
})

// Sincroniza itens com o Banco de Dados
// Caso a tabela não exista ela será criada
// force:false evita a sobreposição dos dados.
Tabela.sync({force: false}).then(() => {
  console.log('Tabela criada no Banco de Dados.')
})

 

export default Tabela