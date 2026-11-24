"use client";

import { useState, useEffect } from "react";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

const IMAGENS = {
    "encomenda-software": "https://cdn-icons-png.flaticon.com/512/9382/9382898.png",
    "revisao-aparelhos": "https://cdn-icons-png.magnific.com/256/1781/1781494.png?semt=ais_white_label",
    "analise-virus": "https://cdn-icons-png.flaticon.com/512/9160/9160739.png",
};

export default function () {
    const [servicos, setServicos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [servicoAtivo, setServicoAtivo] = useState(null);
    const [aparelho, setAparelho] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("");
    const [enviando, setEnviando] = useState(false);

    const [aviso, setAviso] = useState(null);

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("/api/servicos");
                const data = await res.json();
                setServicos(data.servicos ?? []);
            } catch {
                setAviso({ tipo: "erro", texto: "Não foi possível carregar os serviços." });
            } finally {
                setCarregando(false);
            }
        }
        carregar();
    }, []);

    async function abrirSolicitacao(servico) {
        setAviso(null);
        try {
            const res = await fetch("/api/auth/me");
            const { usuario } = await res.json();
            if (!usuario) {
                setAviso({ tipo: "erro", texto: "Faça login para solicitar um serviço." });
                return;
            }
        } catch {
            setAviso({ tipo: "erro", texto: "Erro ao verificar o login." });
            return;
        }
        setAparelho("");
        setDescricao("");
        setErro("");
        setServicoAtivo(servico);
    }

    function fecharJanela() {
        setServicoAtivo(null);
        setErro("");
    }

    async function enviar(e) {
        e.preventDefault();
        setErro("");
        setEnviando(true);
        try {
            const res = await fetch("/api/chamados", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ servico: servicoAtivo.slug, aparelho, descricao }),
            });
            const data = await res.json();
            if (!res.ok) {
                setErro(data.erro ?? "Erro ao enviar a solicitação.");
                return;
            }
            fecharJanela();
            setAviso({ tipo: "ok", texto: "Solicitação enviada! Entraremos em contato." });
        } catch {
            setErro("Erro de conexão. Tente novamente.");
        } finally {
            setEnviando(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1 className="justify-self-center text-3xl font-bold">Solicitação de serviços</h1>

                {aviso && (
                    <p className={`text-center pt-4 ${aviso.tipo === "ok" ? "text-green-500" : "text-red-500"}`}>
                        {aviso.texto}
                    </p>
                )}

                <div className="flex flex-row py-25 p-5 gap-30 justify-center ">
                    {carregando && <p className="text-gray-500">Carregando serviços...</p>}

                    {servicos.map((servico) => (
                        <div key={servico.slug} className="bg-black border-1 border-blue-900 w-[350px] h-[170px] flex items-center justify-between px-2 gap-5 shadow shadow-blue-700 rounded-2xl">
                            <img className="w-[125px] h-[140px]" src={IMAGENS[servico.slug]} alt={servico.titulo} />
                            <div className="flex flex-col text-justify">
                                <h3 className="font-medium text-blue-500">{servico.titulo}</h3>
                                <p className="text-sm text-gray-500">{servico.descricao}</p>
                                <button
                                    onClick={() => abrirSolicitacao(servico)}
                                    className="bg-blue-800/20 hover:bg-blue-950 rounded border border-blue-600">
                                    Solicitar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {servicoAtivo && (
                    <div className="fixed inset-0 bg-zinc-800/80 flex items-center justify-center z-50">
                        <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-lg mx-4">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-blue-800 text-2xl font-bold">
                                    {servicoAtivo.titulo}
                                </h2>
                                <button onClick={fecharJanela} className="text-gray-400 text-xl">
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={enviar} className="flex flex-col gap-4">
                                <div>
                                    <label className="text-gray-400 block mb-2">
                                        Aparelho (opcional)
                                    </label>
                                    <input
                                        type="text"
                                        value={aparelho}
                                        onChange={(e) => setAparelho(e.target.value)}
                                        placeholder="Ex: Notebook Acer"
                                        maxLength={100}
                                        className="w-full border rounded-lg p-3" />
                                </div>
                                <div>
                                    <label className="text-gray-400 block mb-2">
                                        Descreva sua solicitação
                                    </label>
                                    <textarea
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        placeholder="Conte o que você precisa (mín. 10 caracteres)..."
                                        required
                                        rows="5"
                                        className="w-full border rounded-lg p-3 resize-none" />
                                </div>
                                {erro && <p className="text-red-500">{erro}</p>}
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={fecharJanela}
                                        className="px-4 py-2 border rounded-lg hover:bg-zinc-500">
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={enviando}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50">
                                        {enviando ? "Enviando..." : "Enviar"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}