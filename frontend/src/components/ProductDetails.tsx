import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deteProduct } from "../services/ProductService"

interface ProductDetailsProps {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {


    if (params.id != undefined) {
        await deteProduct(params.id)
        return redirect('/')
    }
}

export function ProductDetails({ product }: ProductDetailsProps) {

    const navigate = useNavigate()
    const fetcher = useFetcher()
    const isAvailable = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        name="id"
                        value={product.id}
                        className={`${isAvailable ? 'text-black' : 'text-red-600'} border border-gray-400 cursor-pointer rounded-lg p-2 text-sm uppercase font-bold w-full`}

                    >
                        {isAvailable ? 'Disponible' : 'No Disponible'}
                    </button>

                </fetcher.Form>
            </td>

            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate(`productos/${product.id}/editar`)}
                        className="bg-indigo-600 p-2 text-white rounded-lg cursor-pointer w-full  text-center"
                    >Editar
                    </button>

                    <Form
                        className="w-full"
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm('¿Eliminar?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value='Eliminar'
                            className="bg-red-600 p-2 text-white rounded-lg cursor-pointer w-full  text-center" />

                    </Form>

                </div>
            </td>
        </tr >
    )
}
