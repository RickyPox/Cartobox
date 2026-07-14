import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
    title: "Termos e Condições — Cartobox",
    description: "Termos e condições de utilização do site e dos serviços da Cartobox, Lda.",
};

const SECTIONS: LegalSection[] = [
    {
        heading: "1. Âmbito",
        paragraphs: [
            "Estes Termos e Condições regulam o acesso e a utilização do site cartobox.pt, propriedade da Cartobox, Lda., bem como a contratação dos serviços de fabrico de embalagens de cartão canelado disponibilizados pela empresa.",
        ],
    },
    {
        heading: "2. Aceitação dos termos",
        paragraphs: [
            "Ao aceder e utilizar este site, o utilizador aceita, sem reservas, os presentes Termos e Condições. Caso não concorde com algum dos termos aqui descritos, deverá abster-se de utilizar o site.",
        ],
    },
    {
        heading: "3. Descrição dos serviços",
        paragraphs: [
            "A Cartobox dedica-se ao fabrico de embalagens de cartão canelado personalizadas, adaptando impressão, dimensão e estrutura às necessidades de cada cliente.",
            "Os pedidos de orçamento submetidos através do site têm caráter meramente informativo e não vinculam a Cartobox, sendo a proposta comercial e as condições finais confirmadas por escrito antes de qualquer produção.",
        ],
    },
    {
        heading: "4. Propriedade intelectual",
        paragraphs: [
            "Todos os conteúdos disponíveis no site — incluindo textos, imagens, logótipos, marca e design — são propriedade da Cartobox, Lda. ou dos seus licenciadores, sendo protegidos pelas leis de propriedade intelectual aplicáveis.",
            "É proibida a reprodução, distribuição ou utilização destes conteúdos sem autorização prévia e por escrito da Cartobox.",
        ],
    },
    {
        heading: "5. Utilização do site",
        paragraphs: [
            "O utilizador compromete-se a utilizar o site de forma lícita, não podendo praticar atos que possam danificar, inutilizar ou sobrecarregar o site, nem interferir na sua normal utilização por terceiros.",
        ],
    },
    {
        heading: "6. Limitação de responsabilidade",
        paragraphs: [
            "A Cartobox envida os melhores esforços para manter o site atualizado e disponível, não podendo, no entanto, garantir a disponibilidade contínua e ininterrupta do mesmo, nem a ausência de erros.",
            "A Cartobox não se responsabiliza por danos decorrentes da indisponibilidade do site ou de decisões tomadas exclusivamente com base na informação nele contida.",
        ],
    },
    {
        heading: "7. Ligações a terceiros",
        paragraphs: [
            "O site pode conter ligações para sites de terceiros, disponibilizadas apenas por conveniência. A Cartobox não controla nem se responsabiliza pelo conteúdo ou práticas de privacidade desses sites externos.",
        ],
    },
    {
        heading: "8. Alterações aos termos",
        paragraphs: [
            "A Cartobox reserva-se o direito de alterar os presentes Termos e Condições a qualquer momento, sendo a versão em vigor a publicada no site.",
        ],
    },
    {
        heading: "9. Lei aplicável e foro",
        paragraphs: [
            "Os presentes Termos e Condições regem-se pela lei portuguesa. Para a resolução de qualquer litígio emergente da sua interpretação ou aplicação, é competente o tribunal da comarca da sede da Cartobox, sem prejuízo do recurso a mecanismos de resolução alternativa de litígios, nomeadamente o Livro de Reclamações eletrónico.",
        ],
    },
];

export default function TermosECondicoesPage() {
    return (
        <LegalPage
            eyebrow="Termos"
            title="Termos e Condições"
            updated="2 de julho de 2026"
            sections={SECTIONS}
        />
    );
}
