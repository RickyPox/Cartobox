import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
    title: "Política de Cookies — Cartobox",
    description: "Como o site da Cartobox, Lda. utiliza cookies e como pode geri-los.",
};

const SECTIONS: LegalSection[] = [
    {
        heading: "1. O que são cookies",
        paragraphs: [
            "Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site, que permitem reconhecer o seu navegador e melhorar a experiência de navegação.",
        ],
    },
    {
        heading: "2. Como utilizamos cookies",
        paragraphs: [
            "O site cartobox.pt utiliza cookies para assegurar o correto funcionamento das páginas, compreender de forma agregada como os visitantes utilizam o site e melhorar continuamente os conteúdos e serviços apresentados.",
        ],
    },
    {
        heading: "3. Tipos de cookies utilizados",
        paragraphs: ["No nosso site podem ser utilizados os seguintes tipos de cookies:"],
        list: [
            "Cookies essenciais — necessários para o funcionamento básico do site, não podem ser desativados.",
            "Cookies de desempenho e análise — ajudam-nos a perceber como o site é utilizado, de forma anónima e agregada.",
            "Cookies de preferências — guardam escolhas feitas durante a navegação, para uma experiência mais personalizada.",
        ],
    },
    {
        heading: "4. Como gerir os cookies",
        paragraphs: [
            "Pode, a qualquer momento, gerir ou desativar os cookies através das definições do seu navegador. Note que a desativação de determinados cookies pode afetar o funcionamento e a experiência de navegação no site.",
            "A forma de gerir cookies varia consoante o navegador utilizado, estando normalmente disponível nas opções de privacidade ou segurança do mesmo.",
        ],
    },
    {
        heading: "5. Alterações a esta política",
        paragraphs: [
            "Esta Política de Cookies pode ser atualizada periodicamente, de forma a refletir alterações nas tecnologias utilizadas ou na legislação aplicável. Recomendamos a consulta regular desta página.",
        ],
    },
    {
        heading: "6. Contactos",
        paragraphs: [
            "Para qualquer questão sobre esta Política de Cookies, contacte-nos através do email cartobox@cartobox.pt ou do telefone 244 545 380.",
        ],
    },
];

export default function PoliticaDeCookiesPage() {
    return (
        <LegalPage
            eyebrow="Cookies"
            title="Política de Cookies"
            updated="2 de julho de 2026"
            sections={SECTIONS}
        />
    );
}
