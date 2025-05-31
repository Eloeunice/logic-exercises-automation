// Relacionamentos dos modelos
import Sequelize from 'sequelize';
import { sequelize } from '../config/dbConnect.js';

// Importa os models
import User from './user.js';
import Exercises from './exercise.js';
import Answer from './answer.js';
import Feedback from './feedback.js';
import Exam from './exam.js'

// Define os relacionamentos DEPOIS de todos os imports

// User ↔ Exercises
User.hasMany(Exercises, { foreignKey: 'userId' });
Exercises.belongsTo(User, { foreignKey: 'userId' });

// User ↔ Answer
User.hasMany(Answer, { foreignKey: 'userId' });
Answer.belongsTo(User, { foreignKey: 'userId' });

// Exercises ↔ Answer
Exercises.hasMany(Answer, { foreignKey: 'exerciseId' });
Answer.belongsTo(Exercises, { foreignKey: 'exerciseId' });

// Answer ↔ Feedback
Answer.hasOne(Feedback, { foreignKey: 'answerId' });
Feedback.belongsTo(Answer, { foreignKey: 'answerId' });

// Provas ↔ Exercises
Exam.hasMany(Exercises, { foreignKey: 'examId' })
User.hasMany(Exam, { foreignKey: "userId" })
// Exporta todos os models e a conexão
export {
    sequelize,
    Sequelize,
    User,
    Exercises,
    Answer,
    Feedback,
    Exam
};
