import { sequelize } from "../config/dbConnect.js"
import { DataTypes } from "sequelize"


const Exam = sequelize.define('Exam', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    time_limit: { type: DataTypes.INTEGER },
    difficulty: { type: DataTypes.STRING },
    feat: { type: DataTypes.INTEGER },
    final_media: { type: DataTypes.DECIMAL(10, 2) },
    status: { type: DataTypes.STRING, defaultValue: "Pendente" },
    userId: { type: DataTypes.INTEGER }
}, {
    tableName: 'exams',
    timestamps: false
});

Exam.associate = (models) => {
    Exam.hasMany(models.Exercise, { foreignKey: 'examId' });
    Exam.belongsTo(models.User, { foreignKey: 'userId' });
};

export default Exam