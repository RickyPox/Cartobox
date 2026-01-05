export default function Card({ category, title, image }: { category: string; title: string; image: string }) {
    return (
        <div className="flex-column justify-between" style={{ border: "1px solid rgba(12,10,4,0.15)" }}>
            <div className="flex-column gap-y-2 p-8 ">
                <h3 style={{ color: "var(--primary-color)" }}>{category}</h3>
                <h4>{title}</h4>
            </div>
            <img className="w-full" src={image} alt={category} />
        </div>
    );
}
