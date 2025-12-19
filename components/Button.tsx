export default function Button({ bgColor, text, link }: { bgColor?: string; text: string; link: string }) {
    return (
        <a href={link}>
            <button
                style={bgColor ? { backgroundColor: bgColor, color: "var(--white)" } : { border: "1px solid rgba(12,10,4,0.15)" }}
                className="px-3 py-1.5 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
            >
                {text}
            </button>
        </a>
    );
}
