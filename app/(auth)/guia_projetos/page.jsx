import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

export default function() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1 className="justify-self-center text-3xl font-bold">Solicitação de serviços</h1>
                <div className="flex flex-row py-25 p-5 gap-30 justify-center ">
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[200px] shadow shadow-blue-700 rounded-2xl">
                        <h3>Encomendar projetos</h3>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[200px] shadow shadow-blue-700 rounded-2xl">
                        <h3>Visualizar produtos</h3>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[200px] shadow shadow-blue-700 rounded-2xl">
                        <h3>Análise de Virus</h3>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}