export default function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orca Intelligence Inc",
    "alternateName": "Orca",
    "url": "https://orcaaudit.com",
    "logo": "https://orcaaudit.com/orca-logo-2-white.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-833-211-1197",
      "contactType": "sales",
      "email": "info@orca.bi",
      "areaServed": ["US", "CA"],
      "availableLanguage": ["en"]
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "345 Ridout St N",
      "addressLocality": "London",
      "addressRegion": "ON",
      "postalCode": "N6A 2N8",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.linkedin.com/company/orca-intelligence",
      "https://twitter.com/OrcaIntelligence"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Orca Intelligence",
    "url": "https://orcaaudit.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://orcaaudit.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

