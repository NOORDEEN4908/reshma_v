import {
  SiMeta,
  SiGoogleads,
  SiTiktok,
  SiSnapchat,
  SiGoogleanalytics,
  SiWordpress,
  SiShopify,
  SiFigma,
} from "react-icons/si";
import {
  FaAmazon,
  FaLocationDot,
  FaBagShopping,
  FaBullhorn,
  FaMagnifyingGlassChart,
  FaLaptopCode,
} from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Certifications", link: "#certifications" },
];

const words = [
  { text: "Campaigns", imgPath: "/images/ideas.svg" },
  { text: "Content", imgPath: "/images/concepts.svg" },
  { text: "Strategy", imgPath: "/images/designs.svg" },
  { text: "Growth", imgPath: "/images/code.svg" },
  { text: "Campaigns", imgPath: "/images/ideas.svg" },
  { text: "Content", imgPath: "/images/concepts.svg" },
  { text: "Strategy", imgPath: "/images/designs.svg" },
  { text: "Growth", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "", label: "Brands & Agencies" },
  { value: 40, suffix: "%", label: "Engagement Growth Delivered" },
  { value: 6, suffix: "+", label: "Platforms Managed" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "SEO & Data Focus",
    desc: "Backing every campaign with keyword research, on-page SEO, and analytics so decisions follow the numbers.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Reporting",
    desc: "Keeping stakeholders updated with straightforward performance reports across Meta Insights and Google Analytics.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Planning seasonal and festive campaigns well ahead of schedule, so launches never slip.",
  },
];

// Skills section. Each group renders as one card; every skill gets an icon
// (`icon`) and an optional brand colour (`color`). Add or remove freely.
const skillGroups = [
  {
    title: "Social & Paid Media",
    desc: "Planning, running and optimising campaigns across the major ad platforms.",
    icon: FaBullhorn,
    skills: [
      { name: "Meta Ads (FB & IG)", icon: SiMeta, color: "#0A84FF" },
      { name: "Google Ads", icon: SiGoogleads, color: "#4285F4" },
      { name: "TikTok", icon: SiTiktok, color: "#25F4EE" },
      { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
    ],
  },
  {
    title: "SEO & Analytics",
    desc: "Search visibility and performance reporting that follows the numbers.",
    icon: FaMagnifyingGlassChart,
    skills: [
      { name: "SEO (On & Off-Page)", icon: TbSeo, color: "#62E0FF" },
      { name: "Google My Business", icon: FaLocationDot, color: "#34A853" },
      { name: "Google Analytics", icon: SiGoogleanalytics, color: "#F9AB00" },
    ],
  },
  {
    title: "Web & Design",
    desc: "Building, managing and designing for client websites and social creatives.",
    icon: FaLaptopCode,
    skills: [
      { name: "WordPress", icon: SiWordpress, color: "#3C9ACB" },
      { name: "Shopify", icon: SiShopify, color: "#95BF47" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "E-commerce Marketplaces",
    desc: "Storefront and campaign support on the UAE's leading marketplaces.",
    icon: FaBagShopping,
    skills: [
      { name: "Noon & Talabat", icon: FaBagShopping, color: "#FEEE00" },
      { name: "Amazon", icon: FaAmazon, color: "#FF9900" },
    ],
  },
];

const expCards = [
  {
    review:
      "Own paid and organic social from planning through to reporting, keeping every campaign accountable to reach and conversions.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Digital Marketing Executive — Broeck",
    date: "Nov 2025 - Present",
    responsibilities: [
      "Manage social media operations across Facebook, Instagram, and TikTok with consistent content delivery.",
      "Plan, execute, and optimize Meta ad campaigns to improve reach and conversions.",
      "Support website content, SEO setup, and Google My Business to grow local visibility.",
    ],
  },
  {
    review:
      "Ran multi-platform social and paid campaigns end-to-end, from creative to performance analysis.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Digital Marketing Executive — GRANTGRAS",
    date: "Aug 2024 - Oct 2025",
    responsibilities: [
      "Oversaw social media operations across Facebook, Instagram, and LinkedIn.",
      "Executed Meta advertising campaigns to enhance audience reach and conversion rates.",
      "Performed SEO activities and managed Google My Business to expand local visibility.",
    ],
  },
  {
    review:
      "Handled digital marketing, design, and website management together for international clients.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title:
      "Digital Marketing Executive, Graphic Designer & Website Manager — Guardian Infotech Pvt. Ltd",
    date: "Sep 2023 - Aug 2024",
    responsibilities: [
      "Executed SEO campaigns to increase website traffic and rankings.",
      "Designed and maintained client websites for optimal performance.",
      "Created social media content that grew engagement by 40% for US-based clients.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

// Placeholder testimonials — swap these for real quotes from managers,
// clients, or teammates before publishing.
const testimonials = [
  {
    name: "Add a name",
    mentions: "Manager, Broeck",
    review:
      "Placeholder — add a short quote here about working with Reshma on a real campaign.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Add a name",
    mentions: "Client, GRANTGRAS",
    review:
      "Placeholder — add a short quote here about a result Reshma helped deliver.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Add a name",
    mentions: "Teammate, Guardian Infotech",
    review:
      "Placeholder — add a short quote here about what it's like to work with Reshma.",
    imgPath: "/images/client3.png",
  },
];

// Education. Placeholder entries: replace every field with your real details.
// `highlights` is optional (leave as [] to hide it). Add or remove items freely.
const education = [
  {
    degree: "Bachelor's Degree in Your Field",
    institution: "Your University Name",
    location: "City, Country",
    period: "2019 - 2022",
    grade: "Add grade / GPA (optional)",
    summary:
      "Placeholder: one line on what you studied and the focus areas most relevant to digital marketing.",
    highlights: [
      "Placeholder: relevant coursework, project or achievement",
      "Placeholder: society, award or leadership role",
    ],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name",
    location: "City, Country",
    period: "2017 - 2019",
    grade: "",
    summary: "Placeholder: stream or subjects studied.",
    highlights: [],
  },
];

// Certifications. Placeholder entries: replace with your real certificates.
// issuer  : "google" | "meta" | "hubspot" | "semrush" | "coursera" | "udemy" | "linkedin"
//           (picks the logo; anything else shows a generic award icon)
// image   : optional, e.g. "/images/certs/google-analytics.jpg" (put the file in
//           public/images/certs). Shows a preview that opens full-size on click.
// link    : optional verification URL, shows a "View credential" button.
const certifications = [
  {
    title: "Certification Title One",
    issuer: "google",
    issuerName: "Issuing Organisation",
    date: "Month YYYY",
    credentialId: "",
    link: "",
    image: "",
    skills: ["Skill covered", "Skill covered"],
  },
  {
    title: "Certification Title Two",
    issuer: "meta",
    issuerName: "Issuing Organisation",
    date: "Month YYYY",
    credentialId: "",
    link: "",
    image: "",
    skills: ["Skill covered", "Skill covered"],
  },
  {
    title: "Certification Title Three",
    issuer: "hubspot",
    issuerName: "Issuing Organisation",
    date: "Month YYYY",
    credentialId: "",
    link: "",
    image: "",
    skills: ["Skill covered", "Skill covered"],
  },
  {
    title: "Certification Title Four",
    issuer: "",
    issuerName: "Issuing Organisation",
    date: "Month YYYY",
    credentialId: "",
    link: "",
    image: "",
    skills: [],
  },
];

// Add your real profile URLs in `href`; icons without one are not clickable.
const socialImgs = [
  { name: "Instagram", imgPath: "/images/insta.png", href: "" },
  { name: "Facebook", imgPath: "/images/fb.png", href: "" },
  { name: "LinkedIn", imgPath: "/images/linkedin.png", href: "" },
];

// About section. Edit the text here. Put your photo at public/images/me.jpg
// (any .jpg/.png works, just update `photo` if you use another name).
const aboutMe = {
  photo: "/images/me.jpg",
  name: "Reshma V",
  role: "Digital Marketing Executive",
  location: "Dubai, UAE",
  paragraphs: [
    "I'm a Digital Marketing Executive based in Dubai with a passion for SEO and social growth. I plan, run and report on campaigns so every decision is backed by the numbers.",
    "Over the last 2+ years I've worked across SEO, Meta ad campaigns, social media, Google My Business, graphic design and website management for brands and agencies, including Broeck, GRANTGRAS and Guardian Infotech.",
  ],
  facts: [
    { label: "Focus", value: "SEO, social & paid growth" },
    { label: "Tools", value: "Meta Ads, Google Analytics, WordPress, Shopify, Figma" },
    { label: "Based in", value: "Dubai, UAE" },
  ],
};

// Tabbed work section (SEO / Websites / Posters). Every card below is a
// placeholder, so replace title, desc, tags, image (and add a `link`) with your
// real projects. Add or remove items freely; the tabs update automatically.
// Images live in public/images, so "/images/your-file.png" works.
const workTabs = [
  {
    id: "seo",
    label: "SEO Work",
    intro: "Keyword research, on-page fixes, local SEO and the results they drove.",
    items: [
      {
        title: "SEO Project One",
        desc: "Placeholder — describe what you did (audit, keywords, on-page, GMB) and the result.",
        tags: ["On-Page SEO", "Keywords"],
        image: "/images/project2.png",
      },
      {
        title: "Local SEO & Google My Business",
        desc: "Placeholder — add the business, what you set up and the visibility gain.",
        tags: ["Local SEO", "GMB"],
        image: "/images/project1.png",
      },
      {
        title: "SEO Project Three",
        desc: "Placeholder — add traffic, ranking or lead numbers you can stand behind.",
        tags: ["Off-Page SEO", "Analytics"],
        image: "/images/project3.png",
      },
    ],
  },
  {
    id: "websites",
    label: "Websites",
    intro: "Sites designed, built or managed, with live links where possible.",
    items: [
      {
        title: "Website Project One",
        desc: "Placeholder — add the client, platform (WordPress / Shopify) and your role.",
        tags: ["WordPress", "Design"],
        image: "/images/project1.png",
      },
      {
        title: "Website Project Two",
        desc: "Placeholder — what you built or improved and why it mattered.",
        tags: ["Shopify", "Performance"],
        image: "/images/project3.png",
      },
      {
        title: "Website Project Three",
        desc: "Placeholder — add a live link in the `link` field so visitors can open it.",
        tags: ["Management", "SEO setup"],
        image: "/images/project2.png",
      },
    ],
  },
  {
    id: "posters",
    label: "Posters",
    intro: "Social posts, festive creatives and campaign posters.",
    poster: true,
    items: [
      {
        title: "Poster One",
        desc: "Placeholder — campaign or occasion.",
        tags: ["Social", "Figma"],
        image: "/images/project3.png",
      },
      {
        title: "Poster Two",
        desc: "Placeholder — campaign or occasion.",
        tags: ["Festive", "Offer"],
        image: "/images/project1.png",
      },
      {
        title: "Poster Three",
        desc: "Placeholder — campaign or occasion.",
        tags: ["Brand", "Print"],
        image: "/images/project2.png",
      },
      {
        title: "Poster Four",
        desc: "Placeholder — campaign or occasion.",
        tags: ["Social", "Ad"],
        image: "/images/project3.png",
      },
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  skillGroups,
  education,
  certifications,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  navLinks,
  aboutMe,
  workTabs,
};
