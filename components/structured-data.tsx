export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nanobanana.top/#website",
        "url": "https://nanobanana.top/",
        "name": "Nano Banana AI Image Editor",
        "description": "Free online AI image editor powered by Nano Banana. Transform any image with simple text prompts.",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://nanobanana.top/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://nanobanana.top/#webpage",
        "url": "https://nanobanana.top/",
        "name": "Nano Banana - Free AI Image Editor & Generator",
        "isPartOf": {
          "@id": "https://nanobanana.top/#website"
        },
        "description": "Free online AI image editor powered by Nano Banana. Transform any image with simple text prompts. Features character consistency, one-shot editing, and scene preservation.",
        "breadcrumb": {
          "@id": "https://nanobanana.top/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://nanobanana.top/#software",
        "name": "Nano Banana AI Image Editor",
        "description": "Advanced AI-powered image editing tool that transforms images using simple text prompts with character consistency and scene preservation.",
        "url": "https://nanobanana.top/",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          "Character Consistency",
          "One-Shot Editing", 
          "Scene Preservation",
          "Text-to-Image Transformation",
          "Free Unlimited Usage",
          "No Sign-up Required"
        ],
        "screenshot": "https://nanobanana.top/screenshot.jpg",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://nanobanana.top/#organization",
        "name": "Nano Banana AI",
        "url": "https://nanobanana.top/",
        "email": "support@nanobanana.top",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@nanobanana.top",
          "contactType": "customer support",
          "availableLanguage": ["English", "Chinese"]
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://nanobanana.top/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/nanobananaai",
          "https://github.com/nano-banana"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://nanobanana.top/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Nano Banana different from other AI image generators?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nano Banana specializes in character consistency and scene preservation. Unlike other generators that might change facial features or lose important details, our AI maintains the original character's identity while making the requested transformations."
            }
          },
          {
            "@type": "Question", 
            "name": "Is Nano Banana free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Nano Banana is completely free to use with unlimited image generations. No sign-up required and no hidden costs."
            }
          },
          {
            "@type": "Question",
            "name": "What image formats are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support JPEG, PNG, and WebP formats. Images can be up to 5MB in size. For best results, use high-quality images with clear subjects."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to generate an image?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most images are generated within 30-60 seconds, depending on complexity and current server load. We show real-time progress updates during generation."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact support or report issues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For any questions, technical issues, or feedback, please contact us at support@nanobanana.top. We typically respond within 24 hours and are committed to helping you get the best results from Nano Banana AI."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
