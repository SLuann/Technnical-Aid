import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

export default function() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1>Solicitação de serviços</h1>
            </main>
            <Footer />
        </div>
    )
}