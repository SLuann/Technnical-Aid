import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import Rect from 'react';

export default function() {
    const imageUrl = 'https://exemplo.com';

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1 className="justify-self-center text-3xl font-bold">Solicitação de serviços</h1>
                <div className="flex flex-row py-25 p-5 gap-30 justify-center ">
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[170px] flex items-center justify-between px-2 gap-5 shadow shadow-blue-700 rounded-2xl">
                    <img className="w-[125px] h-[140px]" src="https://cdn-icons-png.flaticon.com/512/9382/9382898.png" alt="Computador" />
                        <div className="flex flex-col text-justify">
                            <h3 className="font-medium text-blue-500 pb-2">Encomenda de softwares</h3>
                            <p className="text-sm text-gray-500">Produção de um software completo ou parcial de acordo com sua solicitação.</p>
                        </div>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[170px] shadow shadow-blue-700 rounded-2xl">
                        <div className="flex flex-col items-center">
                            <h3 className="font-medium text-blue-500">Revisão de aparelhos</h3>
                            <p className="text-sm text-gray-500">Suporte humanizado para auxiliar em problema mais complexos em relação à aparelhos.</p>
                        </div>
                    </div>
                    <div className="bg-black border-1 border-blue-900 w-[350px] h-[170px] shadow shadow-blue-700 rounded-2xl">
                        <div className="flex flex-col items-center">
                            <h3 className="font-medium text-blue-500">Análise de Virus</h3>
                            <p className="text-sm text-gray-500">Inspeção de arquivos, softwares e serviços que possam conter vírus.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}