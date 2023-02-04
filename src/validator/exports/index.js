const InvariantError = require('../../exceptions/InvariantError');
const ExportNotesPaylaodSchema = require('./schema');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validationResult = ExportNotesPaylaodSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error);
    }
  },
};

module.exports = ExportsValidator;
