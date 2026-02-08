export const SITE = {
  website: "https://vedeshpadal.me/",
  author: "Vedesh Padal",
  profile: "https://github.com/vedesh-padal",
  desc: "Backend-leaning Engineer · Building from First Principles",
  title: "Vedesh Padal",
  ogImage: "vedesh-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false, // Disabled for now
    text: "Suggest Changes",
    url: "https://github.com/vedesh-padal/vedeshpadal.me/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // IANA timezone format
} as const;

// Force rebuild
