import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
    title: "Política de Privacidade — Cartobox",
    description: "Como a Cartobox, Lda. recolhe, utiliza e protege os seus dados pessoais.",
};

const SECTIONS: LegalSection[] = [
    {
        heading: "1. Quem somos",
        paragraphs: [
            "A Cartobox, Lda., com sede na Rua da Forcada, S/N, Calços, 2445-712 Martingança, é a responsável pelo tratamento dos dados pessoais recolhidos através do site cartobox.pt e dos contactos comerciais estabelecidos com clientes e potenciais clientes.",
            "Para qualquer questão relacionada com esta política ou com o tratamento dos seus dados pessoais, pode contactar-nos através do email cartobox@cartobox.pt ou do telefone 244 545 380.",
        ],
    },
    {
        heading: "2. Dados que recolhemos",
        paragraphs: [
            "Recolhemos os dados pessoais que nos fornece diretamente, nomeadamente através do formulário de contacto e pedido de orçamento presente no site.",
        ],
        list: [
            "Dados de identificação e contacto: nome, empresa, email e telefone.",
            "Conteúdo da mensagem: informação sobre o pedido de orçamento ou contacto.",
            "Dados de navegação recolhidos de forma automática, através de cookies e tecnologias semelhantes (ver a nossa Política de Cookies).",
        ],
    },
    {
        heading: "3. Finalidade do tratamento",
        paragraphs: [
            "Utilizamos os seus dados pessoais para responder a pedidos de orçamento e contacto, prestar informação sobre os nossos produtos e serviços, gerir a relação comercial e cumprir obrigações legais e contabilísticas a que estamos sujeitos.",
        ],
    },
    {
        heading: "4. Fundamento legal",
        paragraphs: [
            "O tratamento dos seus dados baseia-se, consoante o caso, no seu consentimento, na execução de diligências pré-contratuais a seu pedido, na execução de um contrato em que seja parte, ou no interesse legítimo da Cartobox em responder aos contactos que nos são dirigidos.",
        ],
    },
    {
        heading: "5. Partilha de dados",
        paragraphs: [
            "Não vendemos nem cedemos os seus dados pessoais a terceiros para fins de marketing. Os seus dados podem ser partilhados com prestadores de serviços que colaboram com a Cartobox (por exemplo, alojamento web e envio de email), sempre no estrito cumprimento das obrigações de confidencialidade e segurança aplicáveis.",
        ],
    },
    {
        heading: "6. Prazo de conservação",
        paragraphs: [
            "Conservamos os seus dados pessoais apenas pelo período necessário para cumprir as finalidades para as quais foram recolhidos, ou pelo prazo exigido por obrigações legais, nomeadamente fiscais e contabilísticas.",
        ],
    },
    {
        heading: "7. Os seus direitos",
        paragraphs: [
            "Nos termos do Regulamento Geral sobre a Proteção de Dados, pode, a qualquer momento, exercer os seus direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição ao tratamento dos seus dados pessoais, bem como retirar o consentimento previamente dado.",
            "Para exercer estes direitos, contacte-nos através de cartobox@cartobox.pt. Tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).",
        ],
    },
    {
        heading: "8. Cookies",
        paragraphs: [
            "O site cartobox.pt utiliza cookies para melhorar a experiência de navegação. Para mais informação sobre os cookies utilizados e como os pode gerir, consulte a nossa Política de Cookies.",
        ],
    },
    {
        heading: "9. Alterações a esta política",
        paragraphs: [
            "Esta Política de Privacidade pode ser atualizada periodicamente, de forma a refletir alterações às nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos a consulta regular desta página.",
        ],
    },
];

export default function PoliticaDePrivacidadePage() {
    return (
        <LegalPage
            eyebrow="Privacidade"
            title="Política de Privacidade"
            updated="2 de julho de 2026"
            sections={SECTIONS}
        />
    );
}
