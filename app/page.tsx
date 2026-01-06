import Home from "@/components/Home";
import Service from "@/components/Service";
import Produtos from "@/components/Produtos";
import Faq from "@/components/Faq";
import Cardboard from "@/components/Cardboard";

export default function App() {
    return (
        <div>
            <Home />
            <Service />
            <Produtos />
            <Cardboard />
            <Faq />
        </div>
    );
}
