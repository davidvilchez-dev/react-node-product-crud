
import { check } from 'express-validator'

export const validateId = [
    check('id').isInt({ gt: 0 }).withMessage('ID no válido')
]
