import Button from "../components/Button";
import ThreeModel from "../components/3DModel";

export default function Home() {
    return (
        <section className="bg-gradient-blue flex justify-center  lg:pb-115 sm:pb-95 pb-80   relative overflow-hidden">
            <div className="container relative z-10">
                <div className="wrapper flex-column gap-y-8 relative">
                    <div className=" flex-column gap-y-6 max-w-5xl">
                        <h1>Embalagens à medida do seu negócio</h1>
                        <p>
                            Na Cartobox procuramos responder às necessidades individuais de cada empresa, personalizando a impressão, dimensão e
                            estrutura de cada embalagem.
                        </p>
                    </div>

                    <div className="flex">
                        <Button text="Encontre a embalagem à sua medida" Icon={true} link="/contactos" bgColor="var(--primary-color)" />
                    </div>
                </div>
            </div>
            <div className="h-200 w-full absolute xl:top-50 lg:top-60 sm:top-20 xs:top-30 top-50">
                <ThreeModel />
            </div>
        </section>
    );
}
