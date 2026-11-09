import Link from "next/link";
import {Rotas} from "../rotas";

export default function() {
    return(
        <div className="flex flex-col border-b-2 border-zinc-600 gap-5">
            <header className="flex flex-row items-center justify-between px-3 h-20">
                <h1 className="text-5xl font-bold">Technnical Aid</h1>
                <div className="flex gap-5">
                    <Link href={Rotas.infoall} className="text-lg font-medium">Cadastre-se</Link>
                    <Link href={Rotas.infoall} className="text-lg font-medium">Entrar</Link>
                </div>
            </header>
            <nav className="items-center justify-center flex flex-row gap-20">
                <p>Posts</p>
                <p>Informações sobre aparelhos</p>
                <p>Serviços</p>
            </nav>
        </div>
    )
}