import Joi from "joi";

export const validCars = Joi.object({
    brand:Joi.string().regex( /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'бренд має складатися з мін 1 мак 20символів',
    'string.required':'це поле є обов\'язковим'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(2023).required()
})