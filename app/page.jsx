import Header from "./componentes/header";
import Footer from "./componentes/footer";
import {Rotas} from "./rotas";
import Link from "next/link";

export default function() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1 className="justify-self-center text-3xl font-bold">Descubra mais sobre seu aparelho</h1>
                <div className="flex flex-col py-10 px-8 gap-5">
                    <div>
                        <h2 className="text-lg font-medium">Celulares</h2>
                        <div className="flex flex-col gap-2 p-2 bg-blue-300/30 items-center justify-center border border-blue-400 shadow shadow-blue-400 w-[200px] h-[250px]">
                            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Galaxy_S25_Black.png/330px-Galaxy_S25_Black.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20250416041558" alt=""
                            className="w-[85px] h-[180px]" />
                            <h3 className="font-medium">Samsung Galaxy S25 5G</h3>
                            <Link href={Rotas.celS25} className="text-gray-400 hover:text-gray-500 hover:underline">Mais informações</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Notebooks</h2>
                        <div className="flex flex-col gap-2 p-2 bg-blue-300/30 items-center justify-center border border-blue-400 shadow shadow-blue-400 w-[200px] h-[250px]">
                            <img src="https://i.ibb.co/5WFS0qfm/images-removebg-preview.png" alt=""
                            className="w-[210px] h-[180px]" />
                            <h3 className="font-medium">Acer Aspire GO 15</h3>
                            <Link href={Rotas.notAcer} className="text-gray-400 hover:text-gray-500 hover:underline">Mais informações</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Computadores</h2>
                        <div className="flex flex-col gap-2 p-2 bg-blue-300/30 items-center justify-center border border-blue-400 shadow shadow-blue-400 w-[200px] h-[250px]">
                            <img src="https://i.ibb.co/MxNdvS5S/image-787a5d76-removebg-preview.png" alt=""
                            className="w-[210px] h-[180px]" />
                            <h3 className="font-medium">Mancer Kvasir III</h3>
                            <Link href={Rotas.pcMancer} className="text-gray-400 hover:text-gray-500 hover:underline">Mais informações</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}