import AboutAmbient from "@/components/About_ambient";
import AboutClients from "@/components/About_clients";
import AboutHero from "@/components/About_hero";

export default function About() {
    return (
        <div>
            <AboutHero />
            <AboutClients />
            <AboutAmbient />
        </div>
    );
}
