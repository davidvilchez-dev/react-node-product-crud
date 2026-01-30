import { Outlet } from "react-router";

export function Layout() {
    return (
        <>
            <header className="bg-slate-800">
                <div className="mx-auto max-w-6xl py-10">
                    <h1 className="text-4xl font-extrabold text-white">
                        Administrador de Productos
                    </h1>
                </div>
            </header>

            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow-[0_0_5px_rgba(0,0,0,0.4)]">
                <Outlet />
            </main>
        </>
    )
}
