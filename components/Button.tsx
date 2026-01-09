export default function Button({ bgColor, text, link, Icon }: { bgColor?: string; text: string; link: string; Icon?: boolean | false }) {
    return (
        <a href={link}>
            <button
                style={bgColor ? { backgroundColor: bgColor, color: "var(--white)" } : { border: "1px solid rgba(12,10,4,0.15)" }}
                className="px-3 py-1.5 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-x-4"
            >
                {Icon && (
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6665 4.82759L14.2118 2.75862H4.79241L3.33772 4.82759H15.6665ZM0 5.71121C0 5.13793 0.178125 4.57759 0.504688 4.10776L2.58281 1.15517C3.09174 0.431035 3.91451 0 4.78817 0H14.2076C15.0855 0 15.9083 0.431035 16.4172 1.15517L18.4911 4.10776C18.8219 4.57759 18.9958 5.13793 18.9958 5.71121L19 17.2414C19 18.7629 17.7828 20 16.2857 20H2.71429C1.21719 20 0 18.7629 0 17.2414V5.71121Z"
                            fill="white"
                        />
                    </svg>
                )}
                {text}
            </button>
        </a>
    );
}
