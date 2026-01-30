export function formatCurrency(amount: number) {

    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(amount)
    // .replace('S/', 'S/.')

}

export function toBoolean(str: string) {
    return str.toLocaleLowerCase() === 'true'
}