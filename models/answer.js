import { sequelize } from "../config/dbConnect.js"
import { DataTypes } from "sequelize"

const Answer = sequelize.define('answer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    exerciseId: {
        type: DataTypes.INTEGER
    },
    response: { type: DataTypes.TEXT },
    userId: {
        type: DataTypes.INTEGER
    }
})

export default Answer