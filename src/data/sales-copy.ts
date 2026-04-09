import type { ProductCategory } from "@/types/product";

export interface SalesCopy {
  /** Short exam nickname used in headlines (e.g. "LSAT", "NCLEX"). */
  examShort: string;
  /** Long-form exam name for subheads (e.g. "Law School Admission Test"). */
  examLong: string;
  /** Target outcome — what passing unlocks. */
  outcome: string;
  /** Category-specific pain points (bullet list). */
  painPoints: string[];
  /** What students will master (paired with an icon name from lucide-react). */
  masterySkills: { text: string; icon: string }[];
  /** Before/after transformation pairs. */
  beforeAfter: { before: string; after: string }[];
  /** Fallback review quotes if the product has none. */
  fallbackReviews: { quote: string; author: string }[];
  /** Bonuses included with every book. */
  bonuses: { title: string; text: string; icon: string }[];
  /** One-line positioning for the announcement badge. */
  badge: string;
  /** Final CTA subheading. */
  finalSubhead: string;
}

const LSAT: SalesCopy = {
  examShort: "LSAT",
  examLong: "Law School Admission Test",
  outcome: "get into a T14 law school",
  painPoints: [
    "You don't know where to start",
    "You're jumping between random resources",
    "Practice questions don't match the real digital LSAT",
    "You run out of time during Logical Reasoning sections",
    "And your score… isn't improving",
  ],
  masterySkills: [
    { text: "Break down complex arguments with ease", icon: "Brain" },
    { text: "Solve Logical Reasoning questions faster", icon: "Zap" },
    { text: "Master Reading Comprehension passages", icon: "BookOpenCheck" },
    { text: "Handle Analytical Reasoning with confidence", icon: "Target" },
    { text: "Manage time like a 170+ scorer", icon: "Timer" },
  ],
  beforeAfter: [
    {
      before: "Anxious and second-guessing every question",
      after: "Confident and in control from the first passage",
    },
    {
      before: "Guessing which questions matter most",
      after: "Following a proven day-by-day study roadmap",
    },
    {
      before: "Running out of time before the final section",
      after: "Pacing like a top scorer with time to spare",
    },
  ],
  fallbackReviews: [
    { quote: "A complete and ambitious guide for LSAT success.", author: "Verified Buyer" },
    { quote: "Structured study plans make preparation stress-free.", author: "Verified Buyer" },
    { quote: "Improves speed, accuracy, and critical reasoning skills.", author: "Verified Buyer" },
  ],
  bonuses: [
    { title: "600 Digital Flashcards", text: "Printable + Anki-ready deck covering every high-frequency concept.", icon: "Layers" },
    { title: "Weekly Structured Study Plans", text: "Daily tasks mapped across 4, 8, and 12-week schedules.", icon: "ClipboardList" },
    { title: "Expert Test-Taking Strategies", text: "The exact frameworks 170+ scorers use under real timing pressure.", icon: "Trophy" },
    { title: "Common Mistake Avoidance", text: "The top 27 traps students walk into — and how to spot them in 5 seconds.", icon: "Sparkles" },
  ],
  badge: "Built for the New Digital LSAT (2026–2027)",
  finalSubhead:
    "Stop guessing. Stop wasting time on random resources. Start preparing with a complete system built for the new digital LSAT.",
};

const NCLEX: SalesCopy = {
  examShort: "NCLEX",
  examLong: "National Council Licensure Examination",
  outcome: "earn your nursing license on the first attempt",
  painPoints: [
    "You know the clinical content but freeze on exam-style questions",
    "Practice banks feel nothing like the real NGN item types",
    "Prioritization and delegation questions trip you up every time",
    "You've studied for months and still don't feel exam-ready",
    "Your school's review barely touches the Next-Gen format",
  ],
  masterySkills: [
    { text: "Answer Next-Gen case studies step-by-step", icon: "Brain" },
    { text: "Prioritize like a charge nurse under pressure", icon: "Target" },
    { text: "Master medication dosage calculations", icon: "Gauge" },
    { text: "Handle delegation and scope-of-practice questions", icon: "BookOpenCheck" },
    { text: "Recognize safety red flags instantly", icon: "Zap" },
  ],
  beforeAfter: [
    { before: "Second-guessing every SATA question", after: "Spotting the correct rationale in seconds" },
    { before: "Overwhelmed by 2,000+ practice questions with no plan", after: "Working a daily study schedule that fits a 12-hour shift" },
    { before: "Panicking about the Next-Gen case studies", after: "Walking into the testing center calm and prepared" },
  ],
  fallbackReviews: [
    { quote: "The Next-Gen question breakdowns finally made everything click.", author: "Verified Buyer" },
    { quote: "Passed in 75 questions — this book was the difference.", author: "Verified Buyer" },
    { quote: "Way better than the $400 review course I paid for.", author: "Verified Buyer" },
  ],
  bonuses: [
    { title: "800 NGN Practice Questions", text: "Every new item type: case studies, bowtie, matrix, drag-and-drop.", icon: "Layers" },
    { title: "Med-Surg Quick Reference", text: "Fast-access cheat sheet for the 50 most-tested conditions.", icon: "ClipboardList" },
    { title: "Prioritization Decision Trees", text: "Visual flowcharts for ABC, Maslow, and delegation hierarchy.", icon: "Trophy" },
    { title: "Test-Day Calm Protocol", text: "Proven mental prep ritual used by the top 10% of passers.", icon: "Sparkles" },
  ],
  badge: "Built for Next-Gen NCLEX (2026–2027)",
  finalSubhead:
    "You've worked too hard in clinicals to be stopped by a test format. Start preparing with the only system built around the Next-Gen NCLEX.",
};

const CLEP: SalesCopy = {
  examShort: "CLEP",
  examLong: "College-Level Examination Program",
  outcome: "earn college credit and skip the tuition",
  painPoints: [
    "You're trying to save thousands on tuition but don't know what's on the exam",
    "Free study resources are scattered and outdated",
    "You don't have time for a full semester — you need to test out now",
    "Practice tests don't match the College Board's real difficulty",
    "You can't afford to retake and pay the fee twice",
  ],
  masterySkills: [
    { text: "Identify high-yield topics the College Board tests every cycle", icon: "Target" },
    { text: "Write timed essays that actually score", icon: "BookOpenCheck" },
    { text: "Handle quantitative sections without panic", icon: "Gauge" },
    { text: "Memorize terminology with spaced repetition", icon: "Brain" },
    { text: "Finish every section with time to review", icon: "Timer" },
  ],
  beforeAfter: [
    { before: "Staring at hundreds of pages with no study plan", after: "Following a 4-week checklist with daily tasks" },
    { before: "Guessing which topics matter most", after: "Focusing only on what the exam actually tests" },
    { before: "Paying for a semester-long class you don't need", after: "Testing out in one sitting and saving $1,500+" },
  ],
  fallbackReviews: [
    { quote: "Passed on my first try and saved a whole semester of tuition.", author: "Verified Buyer" },
    { quote: "The study plan kept me on track without burning out.", author: "Verified Buyer" },
    { quote: "Way more focused than any free CLEP prep I found online.", author: "Verified Buyer" },
  ],
  bonuses: [
    { title: "400+ Practice Questions", text: "Exam-style items with rationales, not just answer keys.", icon: "Layers" },
    { title: "4-Week Fast-Track Plan", text: "Daily study schedule built for working adults and students.", icon: "ClipboardList" },
    { title: "Essay Scoring Rubric", text: "Self-grade your practice essays against the real CLEP criteria.", icon: "Trophy" },
    { title: "Last-Mile Review Checklist", text: "The 20 topics you MUST review the night before the exam.", icon: "Sparkles" },
  ],
  badge: "Save Thousands in Tuition with CLEP 2026–2027",
  finalSubhead:
    "Stop paying for classes you can test out of. Start preparing with a focused system built for serious CLEP candidates.",
};

const PROFESSIONAL_CERT: SalesCopy = {
  examShort: "your certification",
  examLong: "professional certification exam",
  outcome: "unlock the salary bump and job mobility your certification opens up",
  painPoints: [
    "You're already working full-time — you don't have 200 hours for review courses",
    "Official manuals are dense, dry, and bury the high-yield content",
    "Practice tests don't match the real exam's difficulty curve",
    "You're burning out before you've even registered",
    "One failed attempt sets you back months and hundreds of dollars",
  ],
  masterySkills: [
    { text: "Focus only on high-yield exam domains", icon: "Target" },
    { text: "Memorize frameworks with retrieval-based learning", icon: "Brain" },
    { text: "Work through case-study scenarios efficiently", icon: "BookOpenCheck" },
    { text: "Pace yourself through 4+ hour exams", icon: "Timer" },
    { text: "Eliminate trap answers with proven logic patterns", icon: "Zap" },
  ],
  beforeAfter: [
    { before: "Reading 900-page manuals you'll never finish", after: "Studying a focused guide that matches exam weights" },
    { before: "Booking the exam then postponing twice", after: "Sitting it the first time with a confirmed plan" },
    { before: "Fighting burnout after a 10-hour workday", after: "Studying 30 focused minutes a day and retaining more" },
  ],
  fallbackReviews: [
    { quote: "The most practical cert prep I've used. Passed first try.", author: "Verified Buyer" },
    { quote: "Saved me months compared to the official review course.", author: "Verified Buyer" },
    { quote: "Clean, organized, and actually respects your time.", author: "Verified Buyer" },
  ],
  bonuses: [
    { title: "500+ Domain-Weighted Practice Questions", text: "Distributed across exam domains the way the real test is.", icon: "Layers" },
    { title: "30-Minutes-A-Day Study Plan", text: "Built for working professionals with limited evenings.", icon: "ClipboardList" },
    { title: "Exam-Day Mental Checklist", text: "The 10-step ritual used by first-time passers.", icon: "Trophy" },
    { title: "Frameworks Quick Reference", text: "One-page cheat sheets for every major concept.", icon: "Sparkles" },
  ],
  badge: "For Working Professionals — Pass the First Time",
  finalSubhead:
    "You don't need more content. You need the right content. Start preparing with a system designed for people who don't have time to waste.",
};

const INSURANCE: SalesCopy = {
  examShort: "your insurance license exam",
  examLong: "state insurance licensing exam",
  outcome: "start writing policies and earning commissions",
  painPoints: [
    "You've started a new career and the clock is ticking on your hiring deadline",
    "Pre-licensing courses are packed with filler and legalese",
    "You can't remember which coverages are mandatory vs. optional",
    "Math questions about premiums and deductibles throw you off",
    "You failed once and need to come back stronger — fast",
  ],
  masterySkills: [
    { text: "Master insurance terminology fast", icon: "Brain" },
    { text: "Separate state-specific rules from general concepts", icon: "Target" },
    { text: "Calculate premiums, deductibles, and coinsurance", icon: "Gauge" },
    { text: "Recognize trap answers on coverage questions", icon: "Zap" },
    { text: "Keep calm under strict exam time limits", icon: "Timer" },
  ],
  beforeAfter: [
    { before: "Drowning in 500-page state manuals", after: "Studying a focused guide mapped to exam weights" },
    { before: "Mixing up Property vs. Casualty coverage rules", after: "Answering coverage questions on autopilot" },
    { before: "Missing your career start date", after: "Passing in time to hit the ground running" },
  ],
  fallbackReviews: [
    { quote: "Passed my state's P&C exam first try. This was all I used.", author: "Verified Buyer" },
    { quote: "Finally, a guide that respects my time and focuses on what's tested.", author: "Verified Buyer" },
    { quote: "Clear, organized, and way more effective than the free PDFs.", author: "Verified Buyer" },
  ],
  bonuses: [
    { title: "600+ Practice Questions", text: "Exam-style items across every state-tested domain.", icon: "Layers" },
    { title: "3-Week Fast-Track Plan", text: "Daily checklist for candidates on a hiring deadline.", icon: "ClipboardList" },
    { title: "Terminology Cheat Sheet", text: "Side-by-side comparisons of the 100 most-tested terms.", icon: "Trophy" },
    { title: "Calculation Walkthroughs", text: "Worked examples for premium, claim, and coinsurance math.", icon: "Sparkles" },
  ],
  badge: "Pass Your State Licensing Exam (2026–2027)",
  finalSubhead:
    "Your new career is waiting. Start preparing with a system built to get you licensed on the first try.",
};

export const SALES_COPY: Record<ProductCategory, SalesCopy> = {
  lsat: LSAT,
  nclex: NCLEX,
  clep: CLEP,
  "professional-cert": PROFESSIONAL_CERT,
  insurance: INSURANCE,
};
