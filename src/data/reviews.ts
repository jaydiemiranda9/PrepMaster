import type { Review } from "@/types/product";

export interface FeaturedReview extends Review {
  productId: string;
  productTitle: string;
}

export const PRODUCT_REVIEWS: Record<string, Review[]> = {
  "lsat-prep-book": [
    {
      id: "r1",
      author: "Marcus T.",
      rating: 5,
      text: "Scored a 172 on my first attempt after using this guide. The practice tests are extremely close to the real thing. Worth every penny.",
      examPassed: "LSAT — scored 172",
      date: "2026-01-15",
    },
    {
      id: "r2",
      author: "Jennifer K.",
      rating: 5,
      text: "I tried three other LSAT prep books before this one. This is the only one that explains WHY each answer is correct. Game changer.",
      examPassed: "Accepted to Top 14 Law School",
      date: "2026-02-03",
    },
    {
      id: "r3",
      author: "David R.",
      rating: 4,
      text: "Extremely thorough. Went from a diagnostic 148 to a 163 over 8 weeks. The study plan in the book is very structured and realistic.",
      date: "2025-12-20",
    },
  ],
  "nclex-rn": [
    {
      id: "r4",
      author: "Priya M., RN",
      rating: 5,
      text: "Passed NCLEX on my first try with 75 questions. This guide's clinical judgment framework was exactly what I needed for the NextGen format.",
      examPassed: "NCLEX-RN — passed at 75 questions",
      date: "2026-01-28",
    },
    {
      id: "r5",
      author: "Carlos V.",
      rating: 5,
      text: "After failing once, I used this guide and passed comfortably. The rationales are incredibly detailed. Highly recommend to every nursing student.",
      examPassed: "NCLEX-RN — passed on 2nd attempt",
      date: "2026-02-14",
    },
    {
      id: "r6",
      author: "Ashley W.",
      rating: 5,
      text: "The pharmacology flashcards alone are worth the price. Combined with the full-length exams, I felt fully prepared on test day.",
      date: "2025-11-05",
    },
  ],
  "clep-college-composition": [
    {
      id: "r7",
      author: "Tyler H.",
      rating: 5,
      text: "Earned 6 college credits without taking the class! Studied for 3 weeks with this guide and passed with a score of 68. Incredible value.",
      examPassed: "CLEP College Composition — score 68",
      date: "2026-01-10",
    },
    {
      id: "r8",
      author: "Samantha B.",
      rating: 5,
      text: "The grammar review section is phenomenal. Very clear, very direct. I had been out of school for 5 years and this brought me right back up to speed.",
      date: "2025-10-22",
    },
  ],
  "cpc-exam-prep": [
    {
      id: "r9",
      author: "Rachel N., CPC",
      rating: 5,
      text: "Passed the CPC on my first attempt! The 1,500+ questions with in-depth rationales are incredibly accurate to the actual exam.",
      examPassed: "CPC — passed first attempt",
      date: "2026-02-01",
    },
    {
      id: "r10",
      author: "James O.",
      rating: 4,
      text: "Fantastic resource. Very detailed on the ICD-10 and CPT sections. My only minor feedback is it could use more HCPCS examples, but overall excellent.",
      date: "2025-12-18",
    },
  ],
  "property-casualty-insurance": [
    {
      id: "r11",
      author: "Brian L.",
      rating: 5,
      text: "Cleared my Property & Casualty exam on the first try. The 10 simulations are very close to the real test. Highly recommend!",
      examPassed: "P&C License — passed first try",
      date: "2026-01-20",
    },
  ],
};

export const HOMEPAGE_REVIEWS: FeaturedReview[] = [
  {
    id: "hr1",
    author: "Marcus T.",
    rating: 5,
    text: "Scored a 172 on my LSAT first attempt. The practice tests are extremely close to the real thing. PrepMaster is worth every penny.",
    examPassed: "LSAT — scored 172",
    date: "2026-01-15",
    productId: "lsat-prep-book",
    productTitle: "LSAT Prep Book 2026-2027",
  },
  {
    id: "hr2",
    author: "Priya M., RN",
    rating: 5,
    text: "Passed NCLEX on my first try with just 75 questions. This guide's clinical judgment framework was exactly what I needed for the NextGen format.",
    examPassed: "NCLEX-RN — 75 questions",
    date: "2026-01-28",
    productId: "nclex-rn",
    productTitle: "NCLEX-RN Study Guide 2026-2027",
  },
  {
    id: "hr3",
    author: "Tyler H.",
    rating: 5,
    text: "Earned 6 college credits without taking the class! Studied 3 weeks with this guide and passed with a 68. Incredible value.",
    examPassed: "CLEP Composition — score 68",
    date: "2026-01-10",
    productId: "clep-college-composition",
    productTitle: "Mastering CLEP College Composition",
  },
  {
    id: "hr4",
    author: "Rachel N., CPC",
    rating: 5,
    text: "Passed the CPC exam on my first attempt! The rationales are spot-on to what comes up in the real exam. This is the resource I wish I had years ago.",
    examPassed: "CPC — first attempt",
    date: "2026-02-01",
    productId: "cpc-exam-prep",
    productTitle: "CPC Exam Preparation Guide 2026-2027",
  },
];
