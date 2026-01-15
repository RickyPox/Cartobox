const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://www.cartobox.pt/#cartobox",
    name: "Cartobox, Lda",
    image: "https://www.cartobox.pt/og-image.webp",
    logo: "https://www.cartobox.pt/logo.svg",
    url: "https://www.cartobox.pt",
    telephone: "+351244545380",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Rua da Forcada S/N, Calços",
        addressLocality: "Martingança",
        postalCode: "2445-712",
        addressCountry: "PT",
    },
    areaServed: {
        "@type": "Country",
        name: "Portugal",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 39.68448499262144,
        longitude: -8.97200877404413,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
    ],
    sameAs: ["https://www.facebook.com/cartobox.pt/", "https://www.instagram.com/cartobox.lda/", "https://www.linkedin.com/company/cartobox-lda/"],
};

export default localBusinessSchema;
