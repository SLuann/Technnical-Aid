"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Rotas} from "../rotas";

export default function() {
    const  pathname = usePathname();
    return(
        <div className="px-3 flex flex-col border-b-2 border-zinc-700 gap-3">
            <header className="flex flex-row items-center justify-between h-20">
                <Link href={Rotas.infoall} className="text-5xl font-bold">Technnical Aid</Link>
                <div className="flex gap-5">
                    <Link href={Rotas.infoall} className="text-lg font-medium">Cadastre-se</Link>
                    <Link href={Rotas.infoall} className="text-lg font-medium">Entrar</Link>
                </div>
            </header>
            <nav className="flex items-center justify-center flex-row gap-20">
                <Link href={Rotas.posts} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[130px] rounded-t
                    ${pathname === Rotas.posts ? "bg-zinc-700" : "bg-none"} `}>
                        Posts
                </Link>
                <Link href={Rotas.infoall} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[300px] rounded-t
                    ${pathname === Rotas.infoall ? "bg-zinc-700" : "bg-none"} `}>
                        Informações sobre aparelhos
                </Link>
                <Link href={Rotas.guiaprojetos} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[150px] rounded-t
                    ${pathname === Rotas.guiaprojetos ? "bg-zinc-700" : "bg-none"} `}>
                        Serviços
                </Link>
            </nav>
        </div>
    )
}