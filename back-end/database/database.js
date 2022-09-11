import Sequelize from 'sequelize'

const connection = new Sequelize('tabelafipe', 'root', '7QG57b6vkxTr6$', {
  host: 'localhost',
  dialect: 'mysql'
})

export default connection