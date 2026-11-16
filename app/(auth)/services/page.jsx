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
                        <div>
                            <h3>Encomenda de softwares</h3>
                            <p>Produção de um software completo ou parcial de acordo com sua solicitação.</p>
                        </div>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[200px] shadow shadow-blue-700 rounded-2xl">
                        <div>
                            <h3>Revisão de aparelhos</h3>
                            <p>Suporte humanizado para auxiliar em problema mais complexos em relação à aparelhos.</p>
                        </div>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[200px] shadow shadow-blue-700 rounded-2xl">
                        <div>
                            <h3>Análise de Virus</h3>
                            <p>Inspeção de arquivos, softwares e serviços que possam conter vírus.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}