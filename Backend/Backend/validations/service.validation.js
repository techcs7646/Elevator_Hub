const joi = require("joi");

const createServiceSchema = joi.object({
  name: joi.string().optional(),
  description: joi.string().optional(),
  duration: joi.string().optional(),
  price: joi.string().optional(),
  active: joi.string().optional(),
});
module.exports = {
  createServiceSchema,
};
