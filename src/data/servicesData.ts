import { CoachingService } from '../types';

export const COACHING_SERVICES: CoachingService[] = [
  {
    id: '30-day-habits-program',
    title: '30-Day Healthy Habits Program',
    tagline: 'Establish sustainable nutrition, daily movement, and lifestyle habits without rigid meal plans or extreme diets.',
    duration: '4 Weeks / 30 Days',
    format: 'Structured Self-Paced & Weekly Check-ins',
    badge: 'Most Popular for Beginners',
    idealFor: [
      'Working professionals who struggle with consistency and time management',
      'People who have tried restrictive crash diets and want a sustainable way to eat',
      'Men and women wanting to improve daily protein, fiber, and hydration intake',
      'Beginners seeking structured, progressive guidance that fits into real work schedules',
      'Anyone wanting to build an identity of health through behavioral psychology'
    ],
    notFor: [
      'Anyone looking for a "lose 10kg in 10 days" crash diet',
      'Individuals requiring clinical, medical, or therapeutic nutrition for complex medical conditions',
      'People who want rigid, calorie-obsessed meal sheets without understanding food principles'
    ],
    whatYouLearn: [
      'How to structure a balanced plate (50-25-25) in any Indian or global restaurant or kitchen',
      'How to hit 80g–120g of daily protein using accessible whole foods (veg or non-veg)',
      'The science of satiety, fiber intake, and steady blood sugar for sharp mental focus',
      'How to start strength training at home or the gym in under 45 minutes, 3x per week',
      'How to design your environment and habit loops so healthy choices become automatic'
    ],
    deliverables: [
      'Comprehensive 30-Day Step-by-Step Daily Habit Blueprint',
      'The Complete Protein & Fiber Food Swap Guide (Veg & Non-Veg)',
      'Beginner-Friendly 3-Day Strength Training Guide with Video Form Cues',
      'Printable 30-Day Daily Habit Tracker & Journal',
      'Weekly Self-Assessment & Consistency Scorecards'
    ],
    processSteps: [
      { step: 1, title: 'Phase 1: Hydration & Movement Foundation', desc: 'Days 1–7: Morning hydration anchor, 15-min post-meal walking, and baseline step tracking.' },
      { step: 2, title: 'Phase 2: Protein & Balanced Nutrition', desc: 'Days 8–14: Rebalancing your breakfast and lunch, vegetable volume, and fiber boosting.' },
      { step: 3, title: 'Phase 3: Strength & Functional Movement', desc: 'Days 15–21: Introducing compound resistance training, mobility, and progressive overload.' },
      { step: 4, title: 'Phase 4: Sleep, Meal Prep & Longevity', desc: 'Days 22–30: Sleep hygiene, weekend batch prep routines, and long-term sustainability.' }
    ],
    ctaLabel: 'Enroll in the 30-Day Program'
  },
  {
    id: 'personal-guidance-1-on-1',
    title: 'Personal Nutrition & Lifestyle Guidance',
    tagline: 'Tailored, individual coaching for working professionals who want personalized lifestyle systems.',
    duration: '8–12 Weeks Comprehensive Engagement',
    format: '1-on-1 Personalized Coaching & Consultation',
    badge: 'High-Touch Personal Support',
    idealFor: [
      'Busy executives and managers with frequent travel and demanding corporate schedules',
      'Individuals with specific fitness goals (building functional strength, muscle tone, sustainable fat loss)',
      'Vegetarians needing personalized meal restructuring to hit optimal protein targets',
      'People who want direct accountability, regular feedback, and tailored problem-solving'
    ],
    notFor: [
      'Individuals with active eating disorders, clinical medical pathologies, or renal disease requiring medical supervision',
      'Those seeking instant medication or quick-fix supplement stacks'
    ],
    whatYouLearn: [
      'Detailed audit of your current eating habits, workday schedule, and energy slumps',
      'Customized meal architecture aligned with your food preferences and household cooking setup',
      'Personalized strength and step targets mapped to your weekly calendar',
      'Travel and dining-out navigation playbooks tailored to your favorite cuisines',
      'Direct accountability and weekly iterative adjustments to overcome obstacles'
    ],
    deliverables: [
      'Comprehensive Initial 60-Minute Lifestyle & Nutrition Discovery Session',
      'Personalized Nutrition & Plate Framework (tailored to your exact foods and lifestyle)',
      'Customized Strength Training Routine with ongoing form check support',
      'Bi-Weekly 1-on-1 Strategy & Progress Review Consultations',
      'Private Messaging Access for quick daily questions and meal feedback'
    ],
    processSteps: [
      { step: 1, title: 'In-Depth Discovery Audit', desc: 'We analyze your current schedule, typical meals, sleep quality, activity levels, and preferences.' },
      { step: 2, title: 'Custom Blueprint Design', desc: 'We craft your personalized nutrition anchors, strength split, and daily habit framework.' },
      { step: 3, title: 'Bi-Weekly Iteration & Support', desc: 'We review your consistency, adjust for travel or schedule changes, and celebrate wins.' },
      { step: 4, title: 'Autonomy & Graduation', desc: 'You graduate with complete confidence in your food and movement choices for life.' }
    ],
    ctaLabel: 'Apply for 1-on-1 Guidance'
  }
];

export const MEDICAL_DISCLAIMER_TEXT = `Disclaimer: The information, coaching, and educational content provided on this website are designed for general wellness, fitness, and nutrition education for generally healthy adults. The founder is a corporate professional and certified diet planner sharing knowledge developed through formal learning, continuous research, and personal experience. This service does NOT constitute medical nutrition therapy, clinical dietetics, medical diagnosis, or medical treatment. If you have a diagnosed medical condition (such as diabetes, cardiovascular disease, kidney disorders, thyroid disorders, active gastrointestinal disease), are pregnant or nursing, or have a history of eating disorders, please consult with your physician, registered dietitian, or an appropriately licensed healthcare professional before making significant changes to your diet or exercise routine.`;
