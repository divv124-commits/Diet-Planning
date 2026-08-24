import { PodcastEpisode } from '../types';

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-01-corporate-fitness-nutrition',
    title: 'The Ultimate Guide to Nutrition, Fitness & Building a Sustainable Lifestyle',
    subtitle: 'Practical systems to eat for performance, build progressive strength, and stop the burnout cycle.',
    episodeNumber: 1,
    duration: '54 mins',
    publishDate: 'August 2026',
    youtubeId: 'r_Gew2qKYJs',
    startTime: 366,
    youtubeUrl: 'https://www.youtube.com/watch?v=r_Gew2qKYJs&t=366s',
    description: 'An in-depth, no-nonsense conversation on nutrition, fitness, strength training, and building sustainable health habits alongside a demanding lifestyle. We cover why crash diets fail working professionals, how to understand and hit your protein floor, the role of progressive resistance training for lifelong vitality, overcoming cravings, and designing an environment where healthy choices happen automatically.',
    keyTopics: [
      'Deconstructing modern diet myths: Why extreme restriction backfires',
      'The 3 core macronutrients: Protein, Carbs, Fats demystified for working adults',
      'Why strength training is the ultimate anti-aging medicine for men and women',
      'Navigating food delivery, client dinners, and travel without losing progress',
      'The behavioral psychology of micro-habits and the "Never Miss Twice" rule'
    ],
    timestamps: [
      { time: '06:06', label: 'Featured Segment: Core Nutrition & Fitness Fundamentals' },
      { time: '12:30', label: 'Protein Synthesis, Muscle Retention & Hunger Signals' },
      { time: '22:15', label: 'Progressive Strength Training vs. Endless Cardio' },
      { time: '34:40', label: 'The Balanced Plate System for Real-World Meals' },
      { time: '44:10', label: 'Habit Architecture & Long-Term Adherence' }
    ],
    featuredQuote: 'You don’t need 2 hours in the gym or a private chef. You need practical systems that work on your most chaotic Tuesday.'
  },
  {
    id: 'ep-02-vegetarian-protein-truth',
    title: 'The Truth About Vegetarian Protein & Overcoming the High-Carb Dilemma',
    subtitle: 'How to optimize amino acids, gut health, and satiety without relying solely on powders.',
    episodeNumber: 2,
    duration: '44 mins',
    publishDate: 'July 2026',
    youtubeId: 'L_LUpnjgPso',
    description: 'We explore how Indian vegetarians can hit 80g–120g of high-quality protein every day using whole foods like paneer, soya chunks, tofu, Greek yogurt, sprouted moong, and lentils, while managing calories and carbohydrates effectively.',
    keyTopics: [
      'Protein quality and amino acid scoring (DIAAS) explained simply',
      'Soya chunks: Debunking hormone myths with scientific research',
      'Sprouting and fermenting: Boosting mineral bioavailability in grains and pulses',
      'Essential micronutrients for vegetarians: B12, Iron, Vitamin D, and Zinc'
    ],
    timestamps: [
      { time: '00:00', label: 'The common vegetarian protein struggle' },
      { time: '11:20', label: 'Ranking vegetarian protein sources by density' },
      { time: '23:45', label: 'How to structure a 100g protein day effortlessly' },
      { time: '37:00', label: 'Micronutrient supplementation checklist' }
    ],
    featuredQuote: 'Traditional food wisdom combined with modern nutrition science is the ultimate cheat code for vitality.'
  },
  {
    id: 'ep-03-strength-training-over-30',
    title: 'Why Lifting Weights is Non-Negotiable for Men & Women Over 30',
    subtitle: 'Reversing muscle loss, boosting bone density, and building functional confidence.',
    episodeNumber: 3,
    duration: '48 mins',
    publishDate: 'June 2026',
    youtubeId: 'e-ORhEE9VVg',
    description: 'Why cardio alone is not enough as we age. In this episode, we break down progressive overload, joint-friendly lifting for beginners, and how resistance training acts as a metabolic medicine.',
    keyTopics: [
      'What happens to muscle and bone mineral density after age 30',
      'Why lifting weights won’t make women bulky: the physiology of hormones',
      'Designing a simple 3-day full-body workout that takes only 45 minutes',
      'Joint health, posture correction, and thoracic mobility for desk workers'
    ],
    timestamps: [
      { time: '00:00', label: 'Sarcopenia: The hidden threat to long-term health' },
      { time: '14:10', label: 'The 5 fundamental human movement patterns' },
      { time: '26:50', label: 'How to warm up and protect your lower back & shoulders' },
      { time: '40:15', label: 'Nutrition synergy: Pairing protein with resistance stimuli' }
    ],
    featuredQuote: 'Lifting weights is not vanity; it is the guarantee of your physical independence for the next four decades.'
  }
];
