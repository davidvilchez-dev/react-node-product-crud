import { safeParse } from 'valibot'
import { DraftProductSchema, ProductSchema, ProductsSchema } from '../types'
import axios from 'axios'
import { toBoolean } from '../utils'

interface Product {
    [k: string]: FormDataEntryValue
}

export async function addProduct(data: Product) {

    try {

        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        } else {
            throw new Error('Datos no válido')
        }

    } catch (error) {
        console.log(error)
    }
}


export async function getProducts() {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)

        const products = data.data.map((p: Product) => ({
            ...p,
            price: +p.price, // convierte string → number
        }));

        const result = safeParse(ProductsSchema, products)
        if (result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error....')
        }
    } catch (error) {
        console.log(error)
    }
}


export async function getProductById(id: Product['id']) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)



        // La API puede devolver un array (lista con 1 elemento) o un objeto directamente.
        const raw = Array.isArray(data?.data) ? data.data[0] : data?.data

        if (!raw) throw new Error('Producto no encontrado')

        // Asegurarse de que price sea número (la API suele devolverlo como string)
        const product = {
            ...raw,
            price: +raw.price,
        }

        // Validar un solo producto con el schema apropiado
        const result = safeParse(ProductSchema, product)


        if (result.success) {
            return result.output
        } else {
            throw new Error('Datos inválidos del producto')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(data: Product, id: Product['id']) {

    try {

        const result = safeParse(ProductSchema, {
            id: Number(id),
            name: data.name,
            price: Number(data.price),
            availability: toBoolean(data.availability.toString())
        })

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, result.output)
        }

    } catch (error) {
        console.log(error)
    }
}

export async function deteProduct(id: Product['id']) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)

    } catch (error) {
        console.log(error)
    }
}

export async function updateProductAvailability(id: Product['id']) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.patch(url)

    } catch (error) {
        console.log(error)
    }

}