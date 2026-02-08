import { Request, Response } from "express";
import Product from "../models/Product.model";


export const getProducts = async (req: Request, res: Response) => {

    const products = await Product.findAll({
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    res.json({ data: products })

}

export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json({ data: product })
}

export const createProduct = async (req: Request, res: Response) => {


    const product = await Product.create(req.body)
    res.status(201).json({ data: product })

}

export const updateProduct = async (req: Request, res: Response) => {


    //* 1. consultamos si existe el producto que se quiere actualizar
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }

    //* 2. Actualizamos
    await product.update(req.body)

    res.json({ data: product })
}

export const updateAvailability = async (req: Request, res: Response) => {


    //* 1. Buscamos el producto para actualizar
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }

    // * 2. Actualizamos
    product.availability = !product.dataValues.availability
    await product.save()
    // await product.update({ availability: !product.dataValues.availability })

    res.json({ data: product })
}

export const deleteProduct = async (req: Request, res: Response) => {

    //* 1. Consultamos el producto que vamos a borrar
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }

    //*Eliminamos
    await product.destroy()
    res.json({ data: 'Producto Eliminado' })
}

