const Joi = require('joi');

const ExportNotesPaylaodSchema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportNotesPaylaodSchema;
