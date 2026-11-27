"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Rotas} from "../rotas";
import Logo from "../image/Logo.png";

export default function() {
    const pathname = usePathname();
    return(
        <div className="flex flex-col border-b-2 border-zinc-700 gap-3">
            <header className="flex flex-row items-center md:justify-center h-20">
                <Link href={Rotas.infoall} className="">
                    <img src={Logo.src} alt="Technnical Aid" className="py-3 w-[390px] h-[130px] md:w-[600px] md:h-[200px]"/>
                </Link>
            </header>
            <nav className="flex items-center justify-center flex-row gap-10 md:gap-30">
                <Link href={Rotas.posts} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[130px] rounded-t
                    ${pathname === Rotas.posts ? "bg-zinc-700" : "bg-none"} `}>
                        Posts
                </Link>
                <Link href={Rotas.infoall} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[300px] rounded-t
                    ${pathname === Rotas.infoall ? "bg-zinc-700" : "bg-none"} `}>
                        Informações gerais
                </Link>
                <Link href={Rotas.services} 
                    className={`flex items-center justify-center hover:text-blue-700 hover:font-medium hover:border-b-3 border-gray-500 w-[150px] rounded-t
                    ${pathname === Rotas.services ? "bg-zinc-700" : "bg-none"} `}>
                        Serviços
                </Link>
            </nav>
        </div>
    )
}