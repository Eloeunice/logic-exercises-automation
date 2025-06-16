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
}, {
    tableName: 'users',
    timestamps: false,
})


User.associate = (models) => {
    User.hasMany(models.Exercise, { foreignKey: 'userId' });
    User.hasMany(models.Answer, { foreignKey: 'userId' });
    User.hasMany(models.Exam, { foreignKey: 'userId' });
};


export default User
