import { ResourceItem } from '../types';

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'balanced-plate-template',
    title: 'The Balanced Plate & Indian Meal Template',
    subtitle: 'A visual, foolproof blueprint for constructing satisfying, blood-sugar stable meals.',
    category: 'Meal Templates',
    description: 'Learn how to construct everyday breakfast, lunch, and dinner plates using the 50-25-25 formula: 50% colorful veggies/fiber, 25% protein anchor, 25% smart complex carbohydrates, plus healthy fat accents.',
    format: 'PDF Guide + Printable One-Pager',
    fileSize: '1.4 MB',
    highlights: [
      'Visual breakdown for Indian Thalis and Western bowls',
      'Portion sizing heuristics using your hand (palm, fist, thumb)',
      '10 quick mix-and-match breakfast, lunch, and dinner combinations',
      'Vegetarian and Non-Vegetarian swap lists'
    ],
    previewContent: {
      title: 'The 50-25-25 Balanced Plate Guide',
      intro: 'Stop counting every calorie. Use this visual guide to assemble nutrient-dense, filling meals whether you are cooking at home or eating at a restaurant.',
      sections: [
        {
          heading: 'Zone 1: 50% Non-Starchy Vegetables & Fiber',
          items: [
            'Fresh Kachumber salad (cucumbers, tomatoes, carrots, radish, lemon)',
            'Cooked sabzis: Palak, Methi, Bhindi, Gobhi, Lauki, Tori, French Beans',
            'Sautéed bell peppers, mushrooms, zucchini, or broccoli'
          ]
        },
        {
          heading: 'Zone 2: 25% Quality Protein Anchor',
          items: [
            '100g Paneer (low-fat or regular) or 150g Tofu',
            '50g dry Soya chunks cooked in curry',
            '1 cup thick Dal + 1 cup Sprouted Moong',
            '2–3 Whole Eggs or 120g Chicken / Fish / Prawns'
          ]
        },
        {
          heading: 'Zone 3: 25% Complex Carbohydrates',
          items: [
            '1–2 medium Whole Wheat or Millet (Jowar, Bajra, Ragi) rotis',
            '1 medium cup cooked Brown/Red or fragrant Basmati Rice',
            '1 cup cooked Rolled Oats or Quinoa',
            '1 medium roasted Sweet Potato'
          ]
        },
        {
          heading: 'Zone 4: 1–2 Tsp Healthy Fat Accent',
          items: [
            '1 tsp A2 Desi Ghee over roti or dal',
            '1 tbsp cold-pressed Olive or Mustard oil used in cooking',
            'Small handful of crushed walnuts or seeds sprinkled over salad'
          ]
        }
      ]
    }
  },
  {
    id: 'protein-food-chart',
    title: 'The Complete Protein Foods Density Chart',
    subtitle: 'Comprehensive vegetarian, vegan, and non-vegetarian protein database with serving sizes.',
    category: 'Charts & Guides',
    description: 'A handy refrigerator guide listing 40+ everyday protein foods, their protein content per serving and per 100g, calorie density, and practical cooking tips for busy weekdays.',
    format: 'PDF Guide + High-Res Infographic',
    fileSize: '1.8 MB',
    highlights: [
      'Ranked by Protein-to-Calorie ratio',
      'Clear breakdown for Indian staples (Paneer, Soya, Dals, Sprouts, Eggs, Meats)',
      'Leucine content breakdown for optimal muscle protein synthesis',
      'Portion cheat-sheet for quick meal assembly'
    ],
    previewContent: {
      title: 'Top Protein Sources Ranked by Grams per Serving',
      intro: 'Keep this chart on your fridge or save it on your phone to quickly identify high-protein choices when cooking or ordering out.',
      sections: [
        {
          heading: 'Top Vegetarian / Vegan Powerhouses',
          items: [
            'Soya Chunks (50g dry): 26g Protein | 170 kcal | 6g Fiber',
            'Low-Fat Paneer (100g): 25g Protein | 180 kcal | 0g Fiber',
            'Regular Paneer (100g): 18g Protein | 265 kcal | 0g Fiber',
            'Firm Tofu (100g): 16g Protein | 144 kcal | 2.3g Fiber',
            'Greek Yogurt / Hung Curd (150g): 15g Protein | 120 kcal',
            'Cooked Moong / Chana / Rajma (1 cup): 14–15g Protein | 220–260 kcal | 12–15g Fiber'
          ]
        },
        {
          heading: 'Top Non-Vegetarian Options',
          items: [
            'Chicken Breast (100g cooked): 31g Protein | 165 kcal',
            'Rohu / Salmon / Pomfret (100g cooked): 24g Protein | 180 kcal | Rich in Omega-3',
            'Prawns / Shrimp (100g): 23g Protein | 99 kcal | Ultra lean',
            '2 Whole Eggs + 2 Egg Whites: 20g Protein | 180 kcal'
          ]
        }
      ]
    }
  },
  {
    id: 'high-fiber-checklist',
    title: 'The 30g Daily Fiber Checklist & Swap Guide',
    subtitle: 'How to easily hit your daily fiber target for gut health, satiety, and cholesterol management.',
    category: 'Checklists',
    description: 'Practical, delicious swaps that boost your fiber from the average 12g up to an optimal 30g+ daily without gastrointestinal discomfort.',
    format: 'PDF Printable Checklist',
    fileSize: '950 KB',
    highlights: [
      'Soluble vs. Insoluble fiber balance chart',
      'Easy seed and legume incorporation guide',
      'Digestive adaptation protocol (increasing fiber smoothly)',
      'Daily 30g tick-box tracker'
    ],
    previewContent: {
      title: 'The 30-Gram Fiber Daily Roadmap',
      intro: 'Use this checklist to ensure your gut microbiome receives the prebiotic fiber it needs every single day.',
      sections: [
        {
          heading: 'Morning Boosters (Aim for 8–10g)',
          items: [
            'Add 1 tbsp Chia Seeds or Ground Flaxseeds to your morning bowl (+5g)',
            'Include 1 cup rolled oats or a bowl of fresh berries / papaya (+4g)'
          ]
        },
        {
          heading: 'Afternoon Anchors (Aim for 12–15g)',
          items: [
            'Eat a bowl of raw Kachumber salad before hot food (+4g)',
            'Choose a legume-based curry (Rajma, Chana, Moong) (+8g)',
            'Swap white bread for whole grain or millet roti (+3g)'
          ]
        },
        {
          heading: 'Evening Completion (Aim for 8–10g)',
          items: [
            'Generous serving of cooked green vegetables (Palak, Methi, Bhindi, Broccoli) (+5g)',
            'Snack on a small handful of almonds and roasted chana (+4g)'
          ]
        }
      ]
    }
  },
  {
    id: 'smart-grocery-checklist',
    title: 'The Busy Professional’s Smart Grocery Checklist',
    subtitle: 'Stock your kitchen in 20 minutes for effortless healthy eating all week long.',
    category: 'Checklists',
    description: 'A categorized shopping checklist designed to streamline supermarket trips or online grocery orders (Instamart, Blinkit, Zepto, BigBasket), ensuring your pantry is filled with nutrient-dense staples.',
    format: 'Printable / Mobile PDF Checklist',
    fileSize: '820 KB',
    highlights: [
      'Categorized by produce, proteins, whole grains, and smart snacks',
      'Pantry essentials with long shelf lives',
      'What to buy fresh vs. what to keep frozen/canned',
      'Labels to look out for on packaged goods'
    ],
    previewContent: {
      title: 'Smart Grocery Master List',
      intro: 'If healthy food is in your fridge, you will eat healthy food. Keep this master list handy when doing your weekly groceries.',
      sections: [
        {
          heading: 'Fresh Produce & Greens',
          items: [
            'Cucumbers, Carrots, Radish, Tomatoes, Lemons (for daily salads)',
            'Spinach (Palak), Methi leaves, Bell peppers, Mushrooms, Cauliflower',
            'Seasonal low-glycemic fruits (Apples, Berries, Guava, Pears, Papaya)'
          ]
        },
        {
          heading: 'Quality Proteins',
          items: [
            'Paneer (Low-fat/Regular), Firm Tofu, Greek Yogurt / Set Curd',
            'Soya chunks / Granules, Sprouted Moong, Black Chana, Rajma',
            'Eggs (organic/farm fresh), Chicken breast, Fish fillets'
          ]
        },
        {
          heading: 'Whole Grains & Fiber',
          items: [
            'Rolled Oats, Ragi / Jowar / Bajra flour, Unpolished Brown/Red Basmati rice',
            'Chia seeds, Flaxseeds, Pumpkin seeds, Raw Almonds & Walnuts',
            'Roasted Chana (unsalted), Makhana (fox nuts)'
          ]
        }
      ]
    }
  },
  {
    id: 'office-travel-snack-guide',
    title: 'Healthy Office & Travel Snack Matrix',
    subtitle: 'Stay fueled during 12-hour workdays, airport layovers, and late-night deadlines.',
    category: 'Meal Templates',
    description: 'A practical matrix of portable, non-perishable whole-food snacks that provide clean energy without afternoon sugar crashes.',
    format: 'PDF Guide',
    fileSize: '1.1 MB',
    highlights: [
      'Laptop bag non-perishable snack formulas',
      'Airport & transit navigation tips',
      'Coffee & tea ordering rules to avoid hidden sugars',
      'Late-night hotel room options'
    ],
    previewContent: {
      title: 'The Clean Fuel Snack Matrix',
      intro: 'When hunger strikes at 4:30 PM, reach for combinations that combine protein + fiber + healthy fats to sustain mental focus.',
      sections: [
        {
          heading: 'Desk Drawer Essentials',
          items: [
            'Roasted Chana (Chickpeas) + 6–8 Walnuts',
            'Dry Roasted Makhana (Fox Nuts) with light turmeric & salt',
            'Single-serve plain Whey or Plant protein sachet (just add water)',
            '85% Dark Chocolate (1–2 squares for antioxidant craving satisfaction)'
          ]
        },
        {
          heading: 'Quick Refrigerator Snacks (Office Pantry)',
          items: [
            'Small bowl of Greek yogurt topped with a spoonful of pumpkin seeds',
            'Hard-boiled eggs with a pinch of black pepper and chat masala',
            'Cucumber and carrot sticks with 2 tbsp hummus or hung curd dip'
          ]
        }
      ]
    }
  },
  {
    id: 'beginner-strength-guide',
    title: 'The Beginner’s 3-Day Strength Training Guide',
    subtitle: 'A joint-friendly full-body resistance routine for busy adults (Home or Gym).',
    category: 'Fitness',
    description: 'A complete step-by-step lifting routine that requires only 40 minutes 3 times per week, complete with form cues, warm-up protocols, and progression guidelines.',
    format: 'PDF Workout Plan + Form Reference',
    fileSize: '2.2 MB',
    highlights: [
      'No complicated machines needed: just dumbbells or bodyweight to start',
      'Step-by-step form cues for Squat, Hinge, Push, Pull, and Carry',
      'Dynamic warm-up and cool-down mobility sequences',
      'Workout log sheet for tracking weights and reps'
    ],
    previewContent: {
      title: 'Full-Body Foundation Routine (A & B Split)',
      intro: 'Perform Workout A on Monday, Workout B on Wednesday, and Workout A or B on Friday. Rest at least 48 hours between resistance sessions.',
      sections: [
        {
          heading: 'Workout A: Quad & Push Focus (40 mins)',
          items: [
            '1. Goblet Squat: 3 sets x 8–10 reps (Rest 90s)',
            '2. Dumbbell Overhead Press / Incline DB Press: 3 sets x 8–10 reps',
            '3. Chest-Supported DB Row: 3 sets x 10–12 reps',
            '4. Glute Bridge / Hip Thrust: 3 sets x 12–15 reps',
            '5. Deadbug / Plank: 3 sets x 30–45 seconds'
          ]
        },
        {
          heading: 'Workout B: Posterior Chain & Pull Focus (40 mins)',
          items: [
            '1. Dumbbell Romanian Deadlift (RDL): 3 sets x 8–10 reps (Rest 90s)',
            '2. Push-ups (Floor or Incline): 3 sets x 8–12 reps',
            '3. Lat Pulldown or One-Arm DB Row: 3 sets x 10–12 reps/side',
            '4. Walking Lunges: 3 sets x 10 reps/leg',
            '5. Farmer’s Carry: 3 sets x 40 paces'
          ]
        }
      ]
    }
  },
  {
    id: 'habit-tracker-printable',
    title: 'The 30-Day Habit Tracker & Reflection Journal',
    subtitle: 'A tangible, printable system to build daily consistency and record your progress.',
    category: 'Habit Trackers',
    description: 'A beautifully formatted printable journal with daily tick-boxes, hydration meters, protein anchors, step logs, and weekly reflection prompts.',
    format: 'High-Res Printable PDF (A4 / Letter)',
    fileSize: '1.2 MB',
    highlights: [
      'Visual streak trackers for water, protein, steps, and strength',
      'Weekly habit scorecards based on behavioral psychology',
      'Minimum viable habit definitions for high-stress days',
      'Monthly review reflection template'
    ],
    previewContent: {
      title: '30-Day Daily Habit Log Structure',
      intro: 'Print this sheet and pin it to your bulletin board or fridge. Checking off daily boxes provides instant dopamine feedback.',
      sections: [
        {
          heading: 'Daily 4 Core Anchors',
          items: [
            '[ ] Hydration: 2.5L–3.5L water consumed',
            '[ ] Protein Anchor: 20g–30g protein at breakfast, lunch, and dinner',
            '[ ] Movement: 7,000+ daily steps or post-meal walking',
            '[ ] Recovery: 7+ hours of quality sleep / digital sunset followed'
          ]
        },
        {
          heading: 'Weekly Consistency Scorecard',
          items: [
            'Target: 24 out of 28 total anchor points per week (85%+ consistency)',
            'Review prompt: What went well this week? Where was the friction?'
          ]
        }
      ]
    }
  }
];

export const DOWNLOADABLE_RESOURCES = RESOURCE_ITEMS;
