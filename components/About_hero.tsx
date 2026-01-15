import Button from "./Button";

export default function AboutHero() {
    return (
        <section className="bg-secondary flex justify-center">
            <div className="container">
                <div className="wrapper flex md:flex-row flex-col gap-y-6 lg:gap-y-0 lg:gap-x-20 gap-x-6">
                    <img
                        className="md:w-1/3 md:h-auto md:object-center w-auto h-80 object-cover object-top"
                        src="/About_hero.webp"
                        alt="About Hero Image"
                    />
                    <div className="flex-column lg:gap-y-8 gap-y-6">
                        <div className="about-wrapper flex-column gap-y-6">
                            <h1>Abra a caixa da nossa história</h1>
                            <p>
                                Estamos há mais de uma década ao seu lado e da sua empresa para encontrar a embalagem que é a cara do seu negócio. Na
                                Cartobox acreditamos que todas as empresas são diferentes e como tal precisam de embalagens que representem os seus
                                negócios e que possam acondicionar o melhor possível os seus produtos, seja no armazenamento ou no transporte.
                            </p>
                        </div>
                        <Button text="Faça parte da nossa história" link="#" bgColor="var(--primary-color)" />
                    </div>
                </div>
            </div>
        </section>
    );
}
