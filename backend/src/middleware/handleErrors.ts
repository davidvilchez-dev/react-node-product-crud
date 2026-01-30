import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Función de middleware que chequea y responde con los errores si existen
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    // Captura los errores de las validaciones previas
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Si hay errores, termina la petición con status 400 y el JSON de errores
        return res.status(400).json({ errors: errors.array() });
    }

    // Si no hay errores, permite que la petición continúe al siguiente middleware (el controlador)
    next();
};