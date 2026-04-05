import type { Product, Bundle } from "@/types/product";

export const PRODUCTS: Product[] = [
  // ── LSAT ──────────────────────────────────────────────────────────────
  {
    id: "lsat-prep-book",
    slug: "lsat-prep-book-2026-2027",
    title: "LSAT Prep Book 2026-2027",
    subtitle:
      "Complete Study Guide to Pass the New LSAT with 1500+ Questions and Detailed Answers, 10 Full-Length Practice Tests and Study-Plans to Get into Top Law Schools",
    author: "Evelyn P. Thornbridge",
    category: "lsat",
    price: 37.49,
    pages: 260,
    coverImage: "/products/covers/lsat-prep-book.jpg",
    description:
      "The most comprehensive LSAT prep guide available. Features 1,500+ practice questions, 10 full-length tests, 600 digital flashcards, proven study plans, and expert strategies from top law school graduates.",
    bullets: [
      "1,500+ original practice questions with detailed answer rationales",
      "10 full-length practice tests mirroring the actual LSAT",
      "600 digital flashcards for on-the-go review",
      "Step-by-step study plans for 30, 60, and 90 day prep",
      "Expert strategies for Logical Reasoning, Reading Comprehension, and Analytical Writing",
    ],
    blobKey: "products/lsat-prep-book-2026.pdf",
    bestseller: true,
    featured: true,
  },
  {
    id: "lsat-logical-reasoning",
    slug: "lsat-logical-reasoning-comprehension-guide",
    title: "LSAT The Logical Reasoning Comprehension Guide 2026-2027",
    subtitle:
      "A Strategic Guide to Analytical Thinking, Argument Evaluation, and LSAT Mastery Through Structured Practice",
    author: "Stephen B. Vice",
    category: "lsat",
    price: 29.99,
    pages: 393,
    coverImage: "/products/covers/lsat-logical-reasoning.jpg",
    description:
      "Master LSAT Logical Reasoning with structured practice and proven analytical frameworks. Covers every question type with step-by-step strategies and hundreds of practice drills.",
    bullets: [
      "Deep-dive into all 12 Logical Reasoning question types",
      "Structured argument mapping system",
      "Hundreds of practice questions with detailed explanations",
      "Step-by-step strategies to eliminate wrong answers fast",
      "393 pages of focused, test-relevant content",
    ],
    blobKey: "products/lsat-logical-reasoning-2026.pdf",
    featured: true,
  },
  {
    id: "lsat-reading-comprehension",
    slug: "lsat-reading-comprehension-mastery-blueprint",
    title: "LSAT Reading Comprehension Mastery Blueprint 2026-2027",
    subtitle:
      "Advanced Strategies, Passage Mapping Systems, and High-Difficulty Drills to Achieve 170+ Performance",
    author: "Stephen B. Vice",
    category: "lsat",
    price: 28.49,
    pages: 258,
    coverImage: "/products/covers/lsat-reading-comprehension.jpg",
    description:
      "The strategic guide to decode complex LSAT passages and consistently select best-supported answer choices. Designed for students targeting 170+ scores.",
    bullets: [
      "Passage mapping system to decode dense legal and scientific texts",
      "High-difficulty drills targeting 170+ score range",
      "Answer elimination techniques for tricky trap answers",
      "Advanced strategies for Comparative Reading passages",
      "258 pages of targeted reading comprehension mastery",
    ],
    blobKey: "products/lsat-reading-comprehension-2026.pdf",
  },
  {
    id: "lsat-argumentative-writing",
    slug: "mastering-lsat-argumentative-writing",
    title: "Mastering LSAT Argumentative Writing 2026-2027",
    subtitle:
      "A Comprehensive Preparation Resource to Pass the LSAT Exam with Guided Critique Questions to Get into Top Law Schools",
    author: "Stephen B. Vice",
    category: "lsat",
    price: 29.99,
    pages: 161,
    coverImage: "/products/covers/lsat-argumentative.jpg",
    description:
      "Step-by-step guide to persuasive, analytical LSAT writing with a repeatable system for crafting compelling arguments that impress admissions committees.",
    bullets: [
      "Repeatable framework for LSAT argumentative essay writing",
      "Guided critique questions to sharpen analytical thinking",
      "Sample essays with detailed scoring breakdowns",
      "Strategies to strengthen arguments and identify logical flaws",
      "Focused 161-page guide targeting writing section excellence",
    ],
    blobKey: "products/lsat-argumentative-writing-2026.pdf",
  },
  {
    id: "lsat-commonly-confused-words",
    slug: "commonly-confused-words-for-the-lsat",
    title: "Commonly Confused Words for the LSAT",
    subtitle:
      "A Precision Guide to Mastering Meaning, Logic, and Legal Language",
    author: "Stephen B. Vice",
    category: "lsat",
    price: 29.99,
    pages: 157,
    coverImage: "/products/covers/lsat-commonly-confused.jpg",
    description:
      "Eliminate costly vocabulary mistakes in LSAT Logical Reasoning and Reading Comprehension. Master the precise legal and academic language that determines right from wrong answers.",
    bullets: [
      "Comprehensive guide to commonly confused LSAT vocabulary",
      "Precision training for legal and academic language",
      "Context-based exercises to lock in meaning",
      "Paired with real LSAT-style question examples",
      "Compact 157-page reference for targeted vocabulary mastery",
    ],
    blobKey: "products/lsat-commonly-confused-words.pdf",
  },

  // ── CLEP ──────────────────────────────────────────────────────────────
  {
    id: "clep-college-composition",
    slug: "mastering-clep-college-composition-2026-2027",
    title: "Mastering CLEP College Composition 2026-2027",
    subtitle:
      "A Modern Study Guide with Writing Strategies, Grammar Review, Practice Questions, and Essay Skills to Help You Pass with Confidence",
    author: "Darryl W. Hunter",
    category: "clep",
    price: 29.99,
    pages: 218,
    coverImage: "/products/covers/clep-college-composition.jpg",
    description:
      "Complete study guide for the CLEP College Composition exam. Features 500+ practice questions, grammar review, essay writing strategies, and everything you need to earn college credit fast.",
    bullets: [
      "500+ practice questions with detailed answer explanations",
      "Comprehensive grammar and mechanics review",
      "Proven essay writing strategies for CLEP success",
      "Full-length practice tests with scoring guides",
      "218 pages covering every CLEP composition topic",
    ],
    blobKey: "products/clep-college-composition-2026.pdf",
    bestseller: true,
    featured: true,
  },
  {
    id: "clep-composition-modular",
    slug: "clep-college-composition-modular-study-guide",
    title: "CLEP College Composition Modular Complete Study Guide 2026-2027",
    subtitle:
      "Complete Prep Guide with Diagnostics, Full Exams & Proven Test Strategies",
    author: "Darryl W. Hunter",
    category: "clep",
    price: 29.99,
    pages: 281,
    coverImage: "/products/covers/clep-composition-modular.jpg",
    description:
      "Focused on revision skills, rhetorical analysis, grammar accuracy, organization, tone, source integration, and strategic editing. The most targeted CLEP Modular prep available.",
    bullets: [
      "Diagnostic tests to identify your weak areas immediately",
      "Focused modules on revision, rhetoric, and grammar",
      "Source integration and citation strategies",
      "Full practice exams with detailed scoring",
      "281 pages of modular-specific preparation",
    ],
    blobKey: "products/clep-composition-modular-2026.pdf",
  },
  {
    id: "clep-marketing",
    slug: "clep-principles-of-marketing-study-guide",
    title: "CLEP Principles of Marketing Complete Study Guide 2026-2027",
    subtitle:
      "Complete review, realistic practice tests, smart exam strategies, and clear step-by-step explanations to help you pass first try",
    author: "Darryl W. Hunter",
    category: "clep",
    price: 29.99,
    pages: 347,
    coverImage: "/products/covers/clep-marketing.jpg",
    description:
      "Marketing exam prep with core principles, real-world examples, advertising, branding, pricing, and distribution. Pass the CLEP Marketing exam and earn college credit without the class.",
    bullets: [
      "Complete review of all CLEP marketing principles",
      "Real-world examples for advertising, branding, and pricing",
      "Realistic practice tests matching exam difficulty",
      "Smart strategies for multiple-choice question mastery",
      "347 comprehensive pages covering every marketing topic",
    ],
    blobKey: "products/clep-marketing-2026.pdf",
    featured: true,
  },
  {
    id: "clep-mathematics",
    slug: "clep-college-mathematics-study-guide",
    title: "CLEP College Mathematics Study Guide 2026-2027",
    subtitle:
      "Comprehensive Review, Step-by-Step Lessons, Practice Exams, and Test Strategies to Help You Pass and Earn College Credit Fast",
    author: "Darryl W. Hunter",
    category: "clep",
    price: 29.99,
    pages: 158,
    coverImage: "/products/covers/clep-mathematics.jpg",
    description:
      "Complete math study guide with clear explanations, simple steps, and practical examples. Designed for students who need to pass CLEP College Math without advanced calculus background.",
    bullets: [
      "Step-by-step lessons for every CLEP math topic",
      "Clear explanations for sets, logic, probability, and statistics",
      "Practice problems with full solutions at every level",
      "Test-taking strategies to maximize your score",
      "158 focused pages — no fluff, no wasted time",
    ],
    blobKey: "products/clep-mathematics-2026.pdf",
  },

  // ── NCLEX ──────────────────────────────────────────────────────────────
  {
    id: "nclex-rn",
    slug: "nclex-rn-study-guide-2026-2027",
    title: "NCLEX-RN Study Guide 2026-2027",
    subtitle:
      "Complete Prep Book with 1500+ Practice Questions and Detailed Answers, 10 Full-Length Exams, Proven Clinical Judgment Strategies, and Study Plan to Pass at First Try",
    author: "Sophia A. Langford",
    category: "nclex",
    price: 37.49,
    pages: 245,
    coverImage: "/products/covers/nclex-rn.jpg",
    description:
      "The complete NCLEX-RN prep guide with 1,500+ practice questions, 10 full-length exams, clinical judgment strategies, and 600 digital flashcards. Designed to help you pass your nursing boards on the first attempt.",
    bullets: [
      "1,500+ NCLEX-style practice questions with detailed rationales",
      "10 full-length mock exams simulating actual board conditions",
      "Proven clinical judgment strategies for NextGen NCLEX",
      "600 digital flashcards for pharmacology and lab values",
      "Study plan to organize your prep from day one to exam day",
    ],
    blobKey: "products/nclex-rn-study-guide-2026.pdf",
    bestseller: true,
    featured: true,
  },
  {
    id: "nclex-pn",
    slug: "nclex-pn-study-guide-2026-2027",
    title: "NCLEX-PN Study Guide 2026-2027",
    subtitle:
      "Complete Prep Book with Practice Questions, Full-Length Exams, and Proven Strategies to Pass the PN Boards at First Try",
    author: "Sophia A. Langford",
    category: "nclex",
    price: 29.82,
    pages: 200,
    coverImage: "/products/covers/nclex-pn.jpg",
    description:
      "The targeted NCLEX-PN prep guide built for LPN/LVN candidates. Covers all client needs categories with practice questions, full-length exams, and strategies proven to pass the PN boards.",
    bullets: [
      "Comprehensive coverage of all NCLEX-PN client needs categories",
      "Practice questions with full answer rationales",
      "Full-length mock exams aligned to current test blueprint",
      "Focused pharmacology and medication safety review",
      "Efficient study strategies for busy nursing students",
    ],
    blobKey: "products/nclex-pn-study-guide-2026.pdf",
  },

  // ── PROFESSIONAL CERT ─────────────────────────────────────────────────
  {
    id: "cpc-exam-prep",
    slug: "cpc-exam-preparation-guide-2026-2027",
    title: "CPC Exam Preparation Guide 2026-2027",
    subtitle:
      "A Clear, Step-by-Step Approach to Medical Coding Concepts, Official Guidelines, Exam Prep with 1,500+ Original Questions and Clear In-Depth Answer Rationales",
    author: "Thane S. Rookwell",
    category: "professional-cert",
    price: 40.49,
    pages: 326,
    coverImage: "/products/covers/cpc-exam-prep.jpg",
    description:
      "The structured resource for medical coding CPC certification. Emphasizes accuracy, proper code selection, and mastery of ICD-10, CPT, and HCPCS coding guidelines with 1,500+ original questions.",
    bullets: [
      "1,500+ original practice questions with in-depth answer rationales",
      "Complete coverage of ICD-10-CM, CPT, and HCPCS guidelines",
      "Step-by-step approach to medical coding accuracy",
      "Official AAPC exam strategy and time management tips",
      "326 pages covering every CPC exam domain",
    ],
    blobKey: "products/cpc-exam-prep-2026.pdf",
    featured: true,
  },
  {
    id: "project-management",
    slug: "project-management-knowledge-framework",
    title: "Project Management Knowledge Framework and Professional Standards Guide",
    subtitle:
      "An Expert Resource on Core Principles, Practical Methods, and Modern Strategies for Effective Project Planning, Execution, and Successful Delivery",
    author: "Samuel Lothbrok",
    category: "professional-cert",
    price: 29.99,
    pages: 581,
    coverImage: "/products/covers/project-management.jpg",
    description:
      "A comprehensive exploration of project management concepts, methodologies, and professional practices. Covers PMP-aligned frameworks, agile methods, risk management, and stakeholder communication.",
    bullets: [
      "Complete PMP-aligned project management framework",
      "Agile, Scrum, and hybrid methodology deep-dives",
      "Risk management and stakeholder communication strategies",
      "Real-world case studies and practical templates",
      "581 pages — the most comprehensive PM guide available",
    ],
    blobKey: "products/project-management-2026.pdf",
  },

  // ── INSURANCE ────────────────────────────────────────────────────────
  {
    id: "property-casualty-insurance",
    slug: "property-casualty-insurance-license-exam-prep",
    title: "Property and Casualty Insurance License Exam Prep 2026-2027",
    subtitle:
      "Complete Study Guide with 1500+ Practice Questions & 10 Full-Length Simulations with Clear Explanations to Pass at First Try",
    author: "Calder E. Northwyn",
    category: "insurance",
    price: 37.49,
    pages: 273,
    coverImage: "/products/covers/property-casualty-insurance.jpg",
    description:
      "Your gateway to the insurance profession. Covers insurance principles, policies, state regulations, and career guidance with 1,500+ practice questions and 10 full-length simulations.",
    bullets: [
      "1,500+ practice questions aligned to state exam blueprints",
      "10 full-length simulation exams with answer explanations",
      "Coverage of property, casualty, liability, and auto insurance",
      "State regulation and ethics section",
      "273 pages of exam-focused, career-launching content",
    ],
    blobKey: "products/property-casualty-insurance-2026.pdf",
    featured: true,
  },
];

export const BUNDLES: Bundle[] = [
  {
    id: "lsat-ultimate-bundle",
    slug: "lsat-ultimate-bundle",
    title: "LSAT Ultimate Bundle",
    subtitle: "All 5 LSAT Study Guides — Complete Law School Preparation",
    category: "lsat",
    price: 89.99,
    originalPrice: 155.95, // sum of all 5 LSAT prices
    coverImage: "/products/covers/lsat-bundle.jpg",
    description:
      "Get every LSAT study guide in one bundle and save over $65. Covers Logical Reasoning, Reading Comprehension, Argumentative Writing, vocabulary mastery, and a complete prep book with 1,500+ questions.",
    productIds: [
      "lsat-prep-book",
      "lsat-logical-reasoning",
      "lsat-reading-comprehension",
      "lsat-argumentative-writing",
      "lsat-commonly-confused-words",
    ],
    isBundle: true,
  },
  {
    id: "clep-complete-bundle",
    slug: "clep-complete-bundle",
    title: "CLEP Complete Bundle",
    subtitle: "All 4 CLEP Study Guides — Earn College Credit Faster",
    category: "clep",
    price: 74.99,
    originalPrice: 119.96, // sum of all 4 CLEP prices
    coverImage: "/products/covers/clep-bundle.jpg",
    description:
      "Master all four CLEP exams with one purchase and save $45. Includes College Composition, Composition Modular, Principles of Marketing, and College Mathematics.",
    productIds: [
      "clep-college-composition",
      "clep-composition-modular",
      "clep-marketing",
      "clep-mathematics",
    ],
    isBundle: true,
  },
  {
    id: "nursing-bundle",
    slug: "nursing-bundle",
    title: "Nursing Bundle",
    subtitle: "NCLEX-RN + NCLEX-PN — Complete Nursing Board Prep",
    category: "nclex",
    price: 54.99,
    originalPrice: 67.31, // sum of both NCLEX prices
    coverImage: "/products/covers/nursing-bundle.jpg",
    description:
      "Prepare for both NCLEX boards together and save $12. Includes the complete NCLEX-RN and NCLEX-PN study guides with 1,500+ questions each.",
    productIds: ["nclex-rn", "nclex-pn"],
    isBundle: true,
  },
];

export const CATEGORY_META = {
  lsat: {
    label: "LSAT",
    description: "Law School Admission Test prep guides",
    icon: "⚖️",
    color: "bg-blue-50 text-blue-800",
  },
  clep: {
    label: "CLEP",
    description: "College Level Examination Program study guides",
    icon: "🎓",
    color: "bg-purple-50 text-purple-800",
  },
  nclex: {
    label: "NCLEX",
    description: "Nursing board exam preparation",
    icon: "🏥",
    color: "bg-teal-50 text-teal-800",
  },
  "professional-cert": {
    label: "Professional Cert",
    description: "CPC, PMP, and professional certification prep",
    icon: "📋",
    color: "bg-amber-50 text-amber-800",
  },
  insurance: {
    label: "Insurance",
    description: "Property, casualty, and insurance license exam prep",
    icon: "🏠",
    color: "bg-green-50 text-green-800",
  },
} as const;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return BUNDLES.find((b) => b.slug === slug);
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getBundleProducts(bundle: Bundle): Product[] {
  return bundle.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}
