import Marquee from "react-fast-marquee";

export default function Produtos() {
    return (
        <section className="flex-column justify-center items-center gap-y-8 pb-28">
            <div className="container flex-column justify-center items-center gap-y-20">
                <div className="wrapper flex-column gap-y-4 justify-center items-center">
                    <h3 style={{ color: "var(--primary-color)" }}>Os nossos produtos</h3>
                    <div className=" flex-column gap-y-6 justify-center items-center title-wrapper">
                        <h2 className="text-center">Conheça alguns dos nossos produtos</h2>
                        <p>Cada projeto é único. Por isso temos uma grande variedade de produtos</p>
                    </div>
                </div>
            </div>
            <div className="flex-column gap-y-10">
                {/* <Marquee speed={50} gradient={false} className="gap-x-8 ">
                    <div className="flex-row items-center ">
                        {Array.from({ length: 7 }, (_, i) => (
                            <img className="w-[10vw] lg:w-[170px] mx-4" key={i + 1} src={`/produtos/Caixa_${i + 1}.svg`} />
                        ))}
                    </div>
                </Marquee>
                <Marquee speed={50} gradient={false} direction="right" className="gap-x-8">
                    <div className="flex-row items-center gap-x-8">
                        {Array.from({ length: 6 }, (_, i) => (
                            <img className="w-[10vw] lg:w-[170px] mx-4" key={i + 8} src={`/produtos/Caixa_${i + 8}.svg`} />
                        ))}
                    </div>
                </Marquee> */}
            </div>
        </section>
    );
}
