import Link from "next/link";
import { Rotas } from "../../rotas";

export default function () {
    return (
        <div className="flex flex-col gap-5 mx-1 md:mx-10">
            <Link href={Rotas.infoall} className="flex text-lg font-medium text-gray-300 hover:text-zinc-600 hover:underline">Voltar à página principal</Link>
            <h1 className="text-2xl md:text-4xl font-bold text-center">PC Gamer Completo Mancer Kvasir III</h1>
            <div className="flex flex-col md:flex-row">
            <img src="https://i.ibb.co/MxNdvS5S/image-787a5d76-removebg-preview.png" 
            alt="PC Gamer Completo Mancer Kvasir III" 
            className="w-[400px] h-[350px] md:w-[720px] md:h-[650px]" />
                <ul className="flex flex-col gap-6 md:my-30 md:text-lg">
                    <h2 className="text-lg md:text-2xl font-bold">Informações Gerais</h2>
                    <p>PC Gamer Completo Mancer Kvasir III</p>
                    <p>Fabricante: Mancer / Pichau</p>
                    <p>Modelo: Kvasir III</p>
                    <p>Referência: PCM-Mancer-Gamer-53405</p>
                    <p>Cor: Preto</p>
                </ul>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-center mt-15 md:mt-1">Especificações Técnicas</h2>
            <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                <div className="md:gap-12 flex flex-col md:flex-row justify-between text-justify mx-2">
                    <ul className="flex flex-col gap-3 my-3 md:text-lg">
                        <li>Processador: AMD Ryzen 7 5700G (8 núcleos, 16 threads).</li>
                        <li>Velocidade do processador: 3,8 GHz (até 4,6 GHz em modo Turbo).</li>
                        <li>Placa de vídeo: Gráficos integrados Radeon Vega 8.</li>
                        <li>Placa-mãe: Chipset AMD A520M (soquete AM4, formato Micro-ATX).</li>
                        <li>Memória RAM: 16 GB (2x 8 GB).</li>
                        <li>Tipo da memória: DDR4</li>
                        <li>Clock da memória: 3200 MHz</li>
                        <li>Armazenamento: SSD M.2 de 480 GB.</li>
                        <li>Interface de armazenamento: NVMe / M.2.</li>
                    </ul>

                    <ul className="flex flex-col gap-3 my-3 md:text-lg">
                        <li>Fonte de alimentação: 400 W ou 500 W com certificação 80 Plus e PFC Ativo 
                            (bivolt automática).</li>
                        <li>Gabinete: Pichau Apus Black (Mid-Tower, lateral em vidro temperado e 3 ventoinhas 
                            frontais de 120 mm inclusas).</li>
                        <li>Monitor incluso: Monitor Gamer de 21,5 a 24 polegadas Full HD (1920 × 1080 pixels), 
                            75 Hz ou 100 Hz, conexão HDMI e VGA.</li>
                        <li>Periféricos inclusos: Teclado gamer mecânico/membrana iluminado, mouse gamer óptico, 
                            headset gamer com microfone e mousepad.</li>
                        <li>Sistema operacional: Windows 10 ou Windows 11 (versão de avaliação / Trial).</li>
                        <li>Conectividade: Rede cabeada Gigabit Ethernet (RJ-45) e adaptador Wi-Fi USB incluso.</li>
                        <li>Conexões: Portas USB 3.2, USB 2.0, HDMI, VGA, entradas P2 para áudio e microfone.</li>
                        <li>Alimentação: Cabo de força bivolt (110V / 220V).</li>
                        <li>Garantia: 1 ano (garantia individual por componente junto à loja).</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-8 md:mt-15">
                <h2 className="text-lg md:text-2xl font-bold text-center">Como funciona?</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify md:text-lg">
                        <p>O computador PC Gamer Completo Mancer Kvasir III funciona por meio da integração entre os 
                            componentes internos instalados no gabinete e os periféricos externos conectados a ele.</p>
                        <p>O processador AMD Ryzen 7 5700G executa todos os cálculos do sistema e conta com chip gráfico 
                            Radeon integrado, responsável por processar imagens, vídeos e jogos sem a necessidade 
                            imediata de uma placa de vídeo dedicada. A memória RAM de 16 GB DDR4 armazena temporariamente 
                            os dados dos jogos e programas abertos, garantindo fluidez em multitarefas.</p>
                        <p>O SSD M.2 de 480 GB guarda permanentemente o sistema operacional, os jogos e os arquivos 
                            pessoais com alta velocidade de leitura. A placa-mãe A520M interliga o processador, a 
                            memória, o SSD e a fonte de alimentação, distribuindo energia e dados entre todas as peças.</p>
                        <p>O monitor exibe as imagens geradas pelo computador via cabo HDMI, enquanto o teclado, o 
                            mouse e o headset permitem controlar jogos, digitar e se comunicar. As ventoinhas frontais 
                            do gabinete Pichau Apus mantêm a circulação de ar interno para evitar o superaquecimento 
                            das peças.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-15">
                <h2 className="text-2xl font-bold text-center">Principais problemas e como resolver</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify">
                        <p>1. Computador liga mas não dá vídeo: verificar se o cabo HDMI está conectado na saída 
                            da placa-mãe e no monitor, conferir a fonte de entrada do monitor e verificar o encaixe 
                            dos pentes de memória RAM.</p>
                        <p>2. PC não liga: conferir se o cabo de força está bem conectado na fonte e na tomada, e 
                            verificar se a chave traseira da fonte está na posição ligada (I).</p>
                        <p>3. Superaquecimento durante jogos: limpar a tela mesh frontal e os filtros de poeira do 
                            gabinete, verificar se todas as ventoinhas estão girando e manter o computador em local 
                            ventilado.</p>
                        <p>4. Queda de FPS ou lentidão em jogos: atualizar os drivers gráficos da AMD Radeon, fechar 
                            programas em segundo plano e ajustar a qualidade gráfica do jogo para Full HD médio/baixo.</p>
                        <p>5. Periféricos (teclado, mouse ou headset) não respondem: testar outras portas USB na parte 
                            traseira da placa-mãe e verificar se os conectores P2 do headset estão nas entradas 
                            corretas de áudio e microfone.</p>
                        <p>6. Sem acesso à internet: verificar se o cabo de rede RJ-45 está encaixado corretamente 
                            ou reconectar o adaptador Wi-Fi USB e reiniciar o roteador.</p>
                        <p>7. Armazenamento cheio rapidamente: desinstalar jogos que não estão sendo utilizados ou 
                            instalar um segundo SSD SATA/NVMe para expandir a capacidade.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-15 mb-3">
                <h2 className="text-2xl font-bold text-center">Problemas de Hardware e software</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify">
                        <p>Hardware: são defeitos nas partes físicas do computador e acessórios, como pente de 
                            memória RAM mal encaixado ou danificado, SSD com falha de leitura, fonte queimada, 
                            ventoinhas paradas, monitor com pixels mortos ou periféricos com mau contato no cabo.</p>
                        <p>Software: são problemas relacionados ao sistema operacional Windows e aos programas 
                            instalados, como drivers de vídeo desatualizados, ativação pendente da licença do 
                            Windows Trial, arquivos corrompidos, vírus e conflitos em atualizações do sistema.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}