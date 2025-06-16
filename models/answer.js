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
}, {
    tableName: 'answers',
    timestamps: false,
})

Answer.associate = (models) => {
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.belongsTo(models.Exercise, { foreignKey: 'exerciseId' });
    Answer.hasOne(models.Feedback, { foreignKey: 'answerId' });
}

export default Answer