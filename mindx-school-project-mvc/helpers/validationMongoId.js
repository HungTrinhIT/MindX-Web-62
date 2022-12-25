const { isValidObjectId } = require('mongoose');

function validationMongoId(id) {
  return isValidObjectId(id);
}

module.exports = validationMongoId;
