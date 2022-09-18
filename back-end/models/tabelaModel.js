import Sequelize from 'sequelize'
import connection from '../database/database.js'

const Tabela = connection.define('tabelafipe', {
  id: {
    type: Sequelize.STRING,
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
  file: {
    type: Sequelize.JSON,
    allowNull: false
  }
})

export default Tabela