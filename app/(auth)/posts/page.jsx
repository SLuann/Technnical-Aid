import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

export default function() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <button className="bg-zinc-700 hover:bg-zinc-500 border border-blue-700 rounded w-[90px] h-[30px]">Novo Post</button>
            </main>
            <Footer />
        </div>
    )
}