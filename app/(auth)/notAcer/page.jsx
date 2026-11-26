import Link from "next/link";
import { Rotas } from "../../rotas";

export default function () {
    return (
        <div className="flex flex-col gap-5 mx-1 md:mx-10">
            <Link href={Rotas.infoall} className="flex text-lg font-medium text-gray-300 hover:text-zinc-600 hover:underline">Voltar à página principal</Link>
            <h1 className="text-2xl md:text-4xl font-bold text-center">Notebook Acer Aspire GO 15 AG15-71P-53GM</h1>
            <div className="flex flex-col md:flex-row">
                <img src="https://i.ibb.co/5WFS0qfm/images-removebg-preview.png" 
                alt="Notebook Acer Aspire Go 15 AG15-71P-53GM" className="w-[350px] h-[350px] md:w-[650px] md:h-[650px]" />
                <ul className="flex flex-col gap-6 md:my-30 md:text-lg">
                    <h2 className="text-lg md:text-2xl font-bold">Informações Gerais</h2>
                    <p>Nome do aparelho: Acer Aspire Go 15 AG15-71P-53GM</p>
                    <p>Fabricante: Acer</p>
                    <p>Modelo: AG15-71P-53GM</p>
                    <p>Referência: NX.JF6AL.001</p>
                    <p>Cor: Cinza Aço</p>
                </ul>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-center mt-15 md:mt-1">Especificações Técnicas</h2>
            <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                <div className="md:gap-12 flex flex-col md:flex-row justify-between text-justify mx-2">
                    <ul className="flex flex-col gap-3 my-3 md:text-lg">
                        <li>Processador: Intel Core i5 de 13ª geração.</li>
                        <li>Velocidade do processador: Até 4,60 GHz.</li>
                        <li>Memória RAM: 8 GB.</li>
                        <li>Memória RAM expansível: Até 32 GB.</li>
                        <li>Tipo de memória: DDR5.</li>
                        <li>Clock da memória: 5200 MHz.</li>
                        <li>Armazenamento: SSD de 512 GB.</li>
                        <li>Interface de armazenamento: NVMe.</li>
                        <li>Sistema operacional: Windows 11.</li>
                        <li>Tela: 15,6 polegadas.</li>
                    </ul>

                    <ul className="flex flex-col gap-3 my-3 md:text-lg">
                        <li>Resolução da tela: Full HD (1920 x 1080 pixels)</li>
                        <li>Painel da tela: TN.</li>
                        <li>Taxa de atualização: 60 Hz.</li>
                        <li>Conectividade: Wi-Fi e Bluetooth.</li>
                        <li>Conexões: USB Tipo-C, USB 3.2, HDMI 2.1 e entrada para fone de ouvido e microfone.</li>
                        <li>Multimídia: Webcam integrada.</li>
                        <li>Bateria: Duração aproximada de até 8 horas.</li>
                        <li>Peso: 1,8 kg.</li>
                        <li>Alimentação: Fonte bivolt.</li>
                        <li>Garantia: 1 ano.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-8 md:mt-15">
                <h2 className="text-lg md:text-2xl font-bold text-center">Como funciona?</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify md:text-lg">
                        <p>O notebook Acer Aspire Go 15 funciona por meio da integração entre seus componentes de hardware 
                            e software.</p>
                        <p>O processador Intel Core i5 é responsável por executar instruções, realizar cálculos e processar 
                            informações. A memória RAM armazena temporariamente os dados dos programas que estão sendo 
                            utilizados, permitindo realizar várias tarefas ao mesmo tempo.</p>
                        <p>O SSD de 512 GB armazena permanentemente os arquivos, documentos, programas e o sistema 
                            operacional. A placa-mãe conecta os componentes e permite a comunicação entre eles.</p>
                        <p>A tela exibe imagens e informações, enquanto o teclado e o touchpad permitem que o usuário envie 
                            comandos. O Windows 11 controla o funcionamento do computador e permite utilizar programas, 
                            navegar na internet, estudar e trabalhar.</p>
                        <p>O aparelho também possui Wi-Fi e Bluetooth para conexão com outros dispositivos e redes sem fio.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-15">
                <h2 className="text-2xl font-bold text-center">Principais problemas e como resolver</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify">
                        <p>1. Notebook não liga: verificar se o carregador está conectado corretamente, testar a 
                            tomada e verificar a bateria.</p>
                        <p>2. Tela sem imagem: verificar o brilho, reiniciar o notebook e procurar possíveis problemas
                             na memória RAM ou na tela.</p>
                        <p>3. Computador lento: fechar programas desnecessários, liberar espaço no SSD e verificar o 
                            uso da memória RAM.</p>
                        <p>4. Superaquecimento: limpar as saídas de ventilação e verificar se o sistema de resfriamento 
                            está funcionando corretamente.</p>
                        <p>5. Teclado não funciona: verificar as configurações, atualizar os drivers e procurar 
                            assistência técnica caso exista dano físico.</p>
                        <p>6. Problemas de internet: verificar a conexão Wi-Fi, reiniciar o roteador e atualizar os 
                            drivers de rede.</p>
                        <p>7. SSD com defeito: realizar testes de diagnóstico e, se necessário, substituir a unidade 
                            de armazenamento.</p>
                        <p>8. Bateria não carrega: verificar o carregador, a entrada de energia e a condição da bateria.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-15 mb-3">
                <h2 className="text-2xl font-bold text-center">Problemas de Hardware e software</h2>
                <div className="bg-zinc-600/20 border border-gray-400 rounded-lg">
                    <div className="m-2 flex flex-col gap-3 text-justify">
                        <p>Hardware: são defeitos nas partes físicas do notebook, como memória RAM danificada, SSD 
                            com problemas, teclado quebrado, tela danificada e falhas no sistema de resfriamento.</p>
                        <p>Software: são problemas relacionados aos programas e ao sistema operacional, 
                            como vírus, erros no Windows, drivers desatualizados, programas travando e 
                            falhas na inicialização.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}