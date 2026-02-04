import { check } from 'express-validator';


export const validateProduct = [
    check('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),

    check('price')
        .isNumeric().withMessage('Valor de precio no válido')
        .notEmpty().withMessage('El precio no puede ir vacio')
        .custom(value => value > 0).withMessage('El precio debe ser mayor a 0')
];
