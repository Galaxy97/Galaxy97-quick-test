const createError = require('http-errors');
const services = require('../../services');

module.exports.getAll = async (req, res, next) => {
  try {
    const subject = await services.documents.subjects.getAll(
      Number(req.query.courseId),
    );
    res.send({subject});
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const subject = await services.documents.subjects.create(
      Number(req.query.courseId),
      req.body,
    );
    res.json({id: subject});
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports.editById = async (req, res, next) => {
  try {
    const subject = await services.documents.subjects.editById(
      Number(req.query.courseId),
      Number(req.query.subjectId),
      req.body,
    );
    if (subject) res.json({id: subject});
    else next(createError(400, 'Bad request'));
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports.deleteById = async (req, res, next) => {
  try {
    const result = await services.documents.subjects.deleteById(
      Number(req.query.courseId),
      Number(req.query.subjectId),
    );
    if (result) res.json({message: 'successful delete'});
    else next(createError(400, 'Bad request'));
  } catch (error) {
    next(createError(500, error.message));
  }
};
