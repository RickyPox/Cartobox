import Marquee from "react-fast-marquee";

export default function AboutClients() {
    return (
        <section className=" flex flex-col items-center justify-center">
            <div className="container relative">
                <div className="wrapper flex flex-row items-end">
                    <div className="about-wrapper flex-column gap-y-6 md:w-1/2">
                        <h2>Os nossos clientes</h2>
                        <p>
                            Com uma história sólida e uma reputação inabalável, construímos a nossa empresa com base em valores fundamentais de
                            excelência, inovação e compromisso com a satisfação do cliente. Desde o nosso início, temos sido impulsionados por uma
                            visão clara de sermos uma referência no mercado de caixas de cartão, oferecendo produtos que superam as expectativas dos
                            nossos clientes.
                        </p>
                        <p>
                            Temos clientes nas mais variadas indústrias cujas necessidades diferem grandemente, pelo que nos comprometemos a fazer a
                            embalagem perfeita que enquadre as suas necessidades para que possam realizar as suas atividades sem se preocuparem com a
                            qualidade de acondicionamento dos seus produtos, seja no transporte ou no armazenamento.
                        </p>
                        <p>
                            Alguns dos nossos clientes estão presentes nas indústrias do vidro, vinhos, cerâmica, alimentar, plástico, e-commerce,
                            etc...
                        </p>
                    </div>

                    <div className="md:block hidden">
                        <img src="/Clientes.png" alt="Cliente" aria-label="imagem cliente" />
                    </div>
                </div>
            </div>
            <div className="lg:-mt-20 -mt-10">
                <Marquee autoFill speed={50} gradient={false}>
                    <div className="flex-row items-center mx-4">LOGO DE CLIENTE</div>
                    <img className="mx-4" src="Logo_navbar.svg" />
                </Marquee>
            </div>
        </section>
    );
}
