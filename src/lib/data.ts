export type ProductCategory = "E-commerce" | "Retalho" | "Transporte" | "Arrumação";

export const categories: ProductCategory[] = ["E-commerce", "Retalho", "Transporte", "Arrumação"];

export interface Product {
    name: string;
    category: ProductCategory;
    description: string;
}

export const products: Product[] = [
    {
        name: "Caixa americana",
        category: "Transporte",
        description: "O clássico de canelado simples ou duplo para envio e transporte.",
    },
    {
        name: "Caixa e-commerce",
        category: "E-commerce",
        description: "Abertura fácil, fecho seguro e proteção para envios online.",
    },
    {
        name: "Caixa de tampa",
        category: "Retalho",
        description: "Base e tampa independentes para uma apresentação premium.",
    },
    {
        name: "Caixa expositora",
        category: "Retalho",
        description: "Destaque o produto diretamente no ponto de venda.",
    },
    {
        name: "Fundo automático",
        category: "Transporte",
        description: "Montagem instantânea, sem necessidade de fita adesiva.",
    },
    {
        name: "Divisórias e cunhos",
        category: "Transporte",
        description: "Encaixes à medida que protegem produtos frágeis.",
    },
    {
        name: "Caixa de arquivo",
        category: "Arrumação",
        description: "Arrumação robusta e empilhável para o dia a dia.",
    },
    {
        name: "Embalagem de marca",
        category: "Retalho",
        description: "Impressão de alta definição que veste a sua marca.",
    },
];

export interface CardType {
    num: string;
    name: string;
    mm: number;
    sheets: string;
    use: string;
    gaugeWidthClass: string;
    flute: { amp: number; step: number; step2?: number; double?: boolean };
}

export const cardTypes: CardType[] = [
    {
        num: "01",
        name: "Micro",
        mm: 2,
        sheets: "3 folhas · 1 canelura",
        use: "Ideal para caixas de pequena dimensão.",
        gaugeWidthClass: "w-[33%]",
        flute: { amp: 4, step: 9 },
    },
    {
        num: "02",
        name: "Fino",
        mm: 3,
        sheets: "3 folhas · 1 canelura",
        use: "Arrumação, embalamento e transporte.",
        gaugeWidthClass: "w-[33%]",
        flute: { amp: 6, step: 13 },
    },
    {
        num: "03",
        name: "Largo",
        mm: 4,
        sheets: "3 folhas · 1 canelura",
        use: "Embalamento e transporte de maior volume.",
        gaugeWidthClass: "w-[67%]",
        flute: { amp: 9, step: 18 },
    },
    {
        num: "04",
        name: "Duplo",
        mm: 6,
        sheets: "5 folhas · 2 caneluras",
        use: "Produtos pesados que exigem robustez.",
        gaugeWidthClass: "w-full",
        flute: { amp: 0, step: 18, step2: 18, double: true },
    },
    {
        num: "05",
        name: "Duplo micro",
        mm: 4,
        sheets: "5 folhas · 2 caneluras",
        use: "Um ondulado micro para impressão superior.",
        gaugeWidthClass: "w-[67%]",
        flute: { amp: 0, step: 18, step2: 9, double: true },
    },
];
