import Link from "next/link";
import {Rotas} from "../rotas";

export default function() {
    return(
        <div className="px-3 flex flex-col border-b-2 border-zinc-700 gap-3">
            <header className="flex flex-row items-center justify-between h-20">
                <Link href={Rotas.infoall} className="text-5xl font-bold">Technnical Aid</Link>
                <div className="flex gap-5">
                    <Link href={Rotas.infoall} className="text-lg font-medium">Cadastre-se</Link>
                    <Link href={Rotas.infoall} className="text-lg font-medium">Entrar</Link>
                </div>
            </header>
            <nav className="items-center justify-center flex flex-row gap-20">
                <Link href={Rotas.posts} className="hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500">Posts</Link>
                <Link href={Rotas.infoall} className="hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500">Informações sobre aparelhos</Link>
                <Link href={Rotas.guiaprojetos} className="hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500">Serviços</Link>
            </nav>
        </div>
    )
}