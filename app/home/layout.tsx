import Header from "../components/navigations/header"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <div className="relative flex min-h-screen">
        <Header />
    <div className="flex-1 flex flex-col md:ml-14 mt-10">
        <main className="p-4 flex-1 overflow-auto">
        {children}
        </main>
    </div>
    </div>
    )
}