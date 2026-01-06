import Button from "../components/Button";
export default function Home() {
    return (
        <section className="bg-secondary flex justify-center">
            <div className="container ">
                <div className="wrapper flex-column gap-y-8">
                    <div className=" flex-column gap-y-6">
                        <h1>Embalagens à medida do seu negócio</h1>
                        <p>
                            Na Cartobox procuramos responder às necessidades individuais de cada empresa, personalizando a impressão, dimensão e
                            estrutura de cada embalagem.
                        </p>
                    </div>
                    <div>
                        <Button text="Encontre a embalagem à sua medida" link="/contactos" bgColor="var(--primary-color)" />
                    </div>
                </div>
            </div>
        </section>
    );
}
