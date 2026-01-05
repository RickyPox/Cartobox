import Card from "../components/Card";

export default function Service() {
    return (
        <section className="flex justify-center">
            <div className="container flex-column justify-center items-center gap-y-20">
                <div className="wrapper flex-column gap-y-4 justify-center items-center">
                    <h3 style={{ color: "var(--primary-color)" }}>O nosso serviço</h3>
                    <div className="title-wrapper flex-column gap-y-6 justify-center items-center">
                        <h2>O que oferecemos</h2>
                        <p>Cada embalagem é desenhada especificamente para as suas necessidades.</p>
                    </div>
                </div>
                <div className="cards-wrapper w-full lg:grid lg:grid-cols-3 lg:gap-8 flex flex-col gap-y-6">
                    <Card category="Personalização" title="Design à medida com impressão de alta qualidade" image="/Personalizacao.png" />
                    <Card category="Sustentabilidade" title="Temos um compromisso com o ambiente" image="/Sustentabilidade.png" />
                    <Card category="Rapidez" title="Entrega rápida para garantir as necessidades" image="/Rapidez.png" />
                </div>
            </div>
        </section>
    );
}
