
import { param } from 'express-validator'

export const validateId = [
    param('id').isInt({ gt: 0 }).withMessage('ID no válido')
]
