interface ErrorMesaggeProps {
    children: React.ReactNode
}

export function ErrorMesagge({ children }: ErrorMesaggeProps) {
    return (
        <div className="text-center my-4 text-red-600 font-semibold ">
            {children}
        </div>
    )
}
