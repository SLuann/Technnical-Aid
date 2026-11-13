"use client";

import { useState } from "react";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

export default function () {
    const [posts, setPosts] = useState([]);

    const [JanelaAberto, setJanelaAberto] = useState(false);

    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");

    const LIMITE_POST = 300;

    const [editandoId, setEditandoId] = useState(null);
    const [postSelecionado, setPostSelecionado] = useState(null);

    function excluirPost(id) {
        setPosts(posts.filter((post) => post.id !== id));
    }

    function editarPost(post) {
        setTitulo(post.titulo);
        setConteudo(post.conteudo);

        setEditandoId(post.id);
        setJanelaAberto(true);
    }

    function criarPost(e) {
        e.preventDefault();

        if (editandoId !== null) {

            setPosts(posts.map((post) =>
                post.id === editandoId
                    ? { ...post, titulo, conteudo }
                    : post
            ));

        } else {

            const novoPost = {
                id: Date.now(),
                titulo,
                conteudo
            };

            setPosts([...posts, novoPost]);
        }

        setTitulo("");
        setConteudo("");
        setEditandoId(null);
        setJanelaAberto(false);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-5">
                <h1 className="justify-self-center text-3xl font-bold">Posts da comunidade</h1>
                <div className="flex justify-end pt-5 pr-10">
                    <button onClick={() => setJanelaAberto(true)}
                        className="bg-zinc-700 hover:bg-zinc-500 border border-blue-700 rounded w-[100px] h-[35px]">
                        Novo Post
                    </button>
                </div>
                <div className="px-10 py-6">
                    <h2 className="text-xl font-bold pb-5">Meus posts</h2>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.length === 0 ? (
                            <p className="text-gray-500 py-5">
                                Você ainda não criou nenhum post.
                            </p>
                        ) : (

                            posts.map((post) => (

                                <article
                                    key={post.id}
                                    className="w-full min-w-0 max-w-full max-h-[500px]
                                    overflow-y-auto break-words [overflow-wrap:anywhere]
                                    border border-blue-500 rounded-lg bg-black p-5" >

                                    <h2 className="text-xl font-bold mb-3 break-words">
                                        {post.titulo}
                                    </h2>
                                    <p className="whitespace-pre-wrap break-words">
                                        {post.conteudo.length > LIMITE_POST
                                            ? post.conteudo.substring(0, LIMITE_POST) + "..."
                                            : post.conteudo}
                                    </p>
                                    {post.conteudo.length > LIMITE_POST && (
                                        <button
                                            onClick={() => setPostSelecionado(post)}
                                            className="text-blue-400 hover:text-blue-600 font-medium mt-2">
                                            Ver
                                        </button>
                                    )}
                                    <div className="flex justify-end gap-3 mt-5 pt-3 border-t border-gray-400">
                                        <button
                                            onClick={() => editarPost(post)}
                                            className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => excluirPost(post.id)}
                                            className="text-red-800 hover:bg-red-800 hover:text-white px-4 py-2 rounded-lg" >
                                            Excluir
                                        </button>
                                    </div>
                                </article>
                            ))

                        )}
                    </section>
                </div>
                {JanelaAberto && (
                    <div className="fixed inset-0 bg-zinc-800/80 flex items-center justify-center z-50">
                        <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-lg mx-4">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-blue-800 text-2xl font-bold">
                                    Criar novo post
                                </h2>
                                <button
                                    onClick={() => setJanelaAberto(false)}
                                    className="text-gray-400 text-xl">
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={criarPost} className="flex flex-col gap-4">
                                <div>
                                    <label className="text-gray-400 block mb-2">
                                        Título
                                    </label>
                                    <input
                                        type="text"
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        placeholder="Digite o título..."
                                        required
                                        className="w-full border rounded-lg p-3" />
                                </div>
                                <div>
                                    <label className="text-gray-400 block mb-2">
                                        Conteúdo
                                    </label>
                                    <textarea
                                        value={conteudo}
                                        onChange={(e) => setConteudo(e.target.value)}
                                        placeholder="Escreva seu post..."
                                        required
                                        rows="5"
                                        className="w-full border rounded-lg p-3 resize-none" />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setJanelaAberto(false)}
                                        className="px-4 py-2 border rounded-lg hover:bg-zinc-500" >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800" >
                                        Publicar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/*Janela de visualização completa*/}
                {postSelecionado && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60]">
                        <div className="bg-white text-black p-6 rounded-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-2xl font-bold break-words">
                                    {postSelecionado.titulo}
                                </h2>
                                <button
                                    onClick={() => setPostSelecionado(null)}
                                    className="text-gray-500 text-xl" >
                                    ✕
                                </button>
                            </div>
                            <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                                {postSelecionado.conteudo}
                            </p>
                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={() => setPostSelecionado(null)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg" >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}