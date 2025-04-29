import { DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../config/dbConnect.js"

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING(10), allowNull: false }
})

export default User


//Cria a tabela 
/*export async function syncUser() {
    await User.sync({ alter: true })
    console.log('Tabela User criada')
}
*/