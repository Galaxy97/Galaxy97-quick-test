const dataBase = require('../../../db');
const multiChoice = require('./multiChoice');

const getAll = async topictId => {
  // get all questions this cours`s
  const questions = await dataBase('questions')
    .select()
    .where({topic_id: topictId})
    .leftJoin('multi_choice', 'multi_choice.question_id', 'questions.id');
  return questions;
};

module.exports = {
  multiChoice,
  getAll,
};