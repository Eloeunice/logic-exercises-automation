import { sequelize } from "../config/dbConnect.js"
import { DataTypes } from "sequelize"

const Feedback = sequelize.define('feedback', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    answerId: {
        type: DataTypes.INTEGER
    },
    feat: { type: DataTypes.INTEGER },
    is_correct: { type: DataTypes.BOOLEAN },
    comment: { type: DataTypes.TEXT }
}, {
    tableName: 'feedbacks',
    timestamps: false,
})

Feedback.associate = (models) => {
    Feedback.belongsTo(models.Answer, { foreignKey: 'answerId' });
}

export default Feedback