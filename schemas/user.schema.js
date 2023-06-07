const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(45);
const user = Joi.string().min(3).max(20);
const email = Joi.string().min(4).max(20);
const image = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name.required(),
  user: user.required(),
  email: email.required(),
  image: image.required(),
});

const updateUserSchema = Joi.object({
  user: user,
  email: email,
  image: image,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
