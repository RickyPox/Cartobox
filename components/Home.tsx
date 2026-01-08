import Button from "../components/Button";
import ThreeModel from "../components/3DModel";

export default function Home() {
    return (
        <section className="bg-secondary flex justify-center sm:pb-160 pb-140  relative overflow-x-hidden">
            <div className="container ">
                <div className="wrapper flex-column gap-y-8 relative">
                    <div className=" flex-column gap-y-6 max-w-5xl">
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
            <div className="h-200 w-full absolute xl:top-60 xl:-right-50 lg:top-90 top-60 ">
                <ThreeModel />
            </div>
        </section>
    );
}
