import cardboard from "../data/cardboard.json";

export default function Cardboard() {
    return (
        <section className="bg-secondary flex justify-center">
            <div className="container flex-column justify-center items-center gap-y-20 ">
                <div className="wrapper">
                    <div className=" flex-column gap-y-6 justify-center items-center title-wrapper">
                        <h2 className="text-center">Os nossos tipos de cartão</h2>
                        <p>Conheça os vários tipos de cartão que utilizamos.</p>
                    </div>
                </div>
                <div className="cardboard-wrapper  flex-column lg:gap-y-8 gap-y-20">
                    {cardboard.map((items, i) => (
                        <div key={i} className="flex md:flex-row flex-col gap-x-4 gap-y-4 text-center md:text-left">
                            <div className="cardboard-image-wrapper md:max-w-75 object-cover">
                                <img src={items.img} alt={items.name} />
                            </div>
                            <div className="cardboard-info-wrapper flex-column gap-y-3">
                                <p className="font-bold!">{items.name}</p>
                                <p>{items.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
