export default function AboutAmbient() {
    return (
        <section className=" flex justify-center">
            <div className="container">
                <div className="wrapper flex-column gap-y-8">
                    <h2>O nosso compromisso com o ambiente</h2>
                    <div className="certificates-wrapper flex-row gap-x-8">
                        <div className="fcs-wrapper w-1/3 flex-column gap-y-8 items-center justify-center">
                            <a href="">
                                <img src="FSC.png" alt="FSC Logo" aria-label="Logo FSC" />
                                <h4>Certificação FSC</h4>
                            </a>
                        </div>
                        <div className="ponto-verde-wrapper w-1/3 flex-column gap-y-8 items-center justify-center">
                            <a href="">
                                <img src="Ponto_verde.png" alt="Ponto Verde Logo" aria-label="Logo Ponto Verde" />
                                <h4>Certificação Ponto Verde</h4>
                            </a>
                        </div>
                        <div className="pegada-carbono-wrapper w-1/3 flex-column gap-y-8 items-center justify-center">
                            <a href="">
                                <img src="Pegada.png" alt="Pegada Logo" aria-label="Logo Pegada" />
                                <h4>Redução Pegada de Carbono</h4>
                            </a>
                        </div>
                    </div>
                    <div className="about-ambient-text-wrapper flex-column gap-y-6">
                        <p>
                            A Cartobox tem o compromisso em implementar e manter a Gestão da Cadeia de Responsabilidade de acordo com os requisitos
                            das normas do FSC®, através da escolha e utilização de produtos certificados FSC na produção de alguns dos produtos que
                            comercializa. Consulte-nos para obter o vosso produto FSC.
                        </p>
                        <p>
                            Estamos comprometidos em promover a sustentabilidade e a responsabilidade ambiental. Utilizamos materiais recicláveis e
                            biodegradáveis nos nossos processos de produção, procurando minimizar o nosso impacto no meio ambiente. As nossas soluções
                            de embalagem são projetadas para otimizar o uso de recursos, reduzir desperdícios e promover práticas de embalagem mais
                            ecológicas.
                        </p>
                        <p>
                            Além disso, promovemos a consciência ambiental entre os nossos colaboradores, incentivando práticas de conservação de
                            recursos e separação adequada de resíduos. Também colaboramos com fornecedores comprometidos com práticas sustentáveis, em
                            busca de estabelecer parcerias que promovem a responsabilidade ambiental em toda a cadeia produtiva.
                        </p>
                        <p>
                            Acreditamos que a sustentabilidade vai além da escolha de materiais e processos eco-friendly. Para isso, trabalhamos em
                            conjunto com os nossos clientes para desenvolver embalagens personalizadas que atendam aos requisitos de proteção do
                            produto, ao mesmo tempo em que priorizam a sustentabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
