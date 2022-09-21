import Joi from "joi";

const carValidator = Joi.object({
model:Joi.string().regex(/^[a-zA-ZА-яёЁїЇґҐєЄ]{1,20}$/).required().messages({
    'string.pattern.base':'Тільки букви, мінімум 1 символ, максимум 20'
}),
    price:Joi.number().min(0).max(10000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator}