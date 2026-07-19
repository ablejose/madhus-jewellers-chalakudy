import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file and the Cloudinary asset URLs. No component code should change.
 */
export const BRAND: BrandConfig = {
  businessName: "Madhus Jewellers",
  tagline: "Trusted Jewellery Store in Chalakudy",
  description:
    "Madhus Jewellers is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചാലക്കുടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "https://lh3.googleusercontent.com/gps-proxy/ALd4DhEAUqbVQcaEJhk88IC8pOcY895weS1DPZ_wZSPjfOyZvUbmFzDSdpfi_L_sYFa9j-sE-2F2ofrkaDeYEO8Ob8vxca9B8hIgRDrpxjQsJwkKpDMWrgE_7ZT1PkuMvWklQWNZ0YN6M0izo0y2Ql0DWTpwpHg3t-J3GjE1XiEp03D8Ins-ZKKjbrG8V-Gu2PLpwGhywQ=s1600",
    "https://lh3.googleusercontent.com/gps-proxy/ALd4DhFnrHdYy-Ze80NnIlspqc9kchWXFPy0Al_TPZvCwZYfotUeMZLsYb7JqVeHykzgtPnPElE3WPssqD51dKPwn_5EnUiDT250_UoLJZkYVEEEbdy3bOn_5Rj7nW9ghY_YT-Vy9B7lQXQY0_9RK84L-dGgcfN8ld8U-MrN2ALR5TaZFi_d2dr7Q3K6H76rKV5t9vX4Iw=s1600",
    "https://res.cloudinary.com/fylz5e3j/image/upload/v1782940196/hayazbb_wb1juf.webp",
    "https://res.cloudinary.com/fylz5e3j/image/upload/v1782940196/hayazgg_dtolmr.webp",
  ],

  address: "Market Rd, Chalakudy, Kerala 680307",
  city: "Chalakudy",
  state: "Kerala",
  pincode: "680307",

  phone: "+919349022008",
  whatsapp: "919349022008",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Madhus%20Jewellers&query_place_id=ChIJrd8D8moCCDsR1C8bCxiwFHQ",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "Madhus Jewellers | Jewellery in Chalakudy",
    description:
      "Madhus Jewellers is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",
    keywords: [
      "Madhus Jewellers",
      "jewellery Chalakudy",
      "gold jewellery Chalakudy",
      "diamond jewellery Chalakudy",
      "silver jewellery Chalakudy",
      "jewellery store Kerala",
    ],
    canonical: "https://madhus-jewellers-chalakudy.vercel.app",
    ogImage:
      "https://lh3.googleusercontent.com/gps-proxy/ALd4DhEAUqbVQcaEJhk88IC8pOcY895weS1DPZ_wZSPjfOyZvUbmFzDSdpfi_L_sYFa9j-sE-2F2ofrkaDeYEO8Ob8vxca9B8hIgRDrpxjQsJwkKpDMWrgE_7ZT1PkuMvWklQWNZ0YN6M0izo0y2Ql0DWTpwpHg3t-J3GjE1XiEp03D8Ins-ZKKjbrG8V-Gu2PLpwGhywQ=s1600",
  },

  faq: [],

  whatsappMessage:
    "Hello Madhus Jewellers, I'd like to know more about your jewellery collections.",
};
