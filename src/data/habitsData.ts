import { HabitDay } from '../types';

export const HABIT_PSYCHOLOGY_PILLARS = [
  {
    title: 'Start Inconveniently Small',
    subtitle: 'Lower the activation energy',
    description: 'When starting out, scale down the habit until it takes less than 2 minutes. The goal is establishing the neural ritual first; intensity and volume can always be scaled later.',
    quote: 'Make it so easy you can’t say no.',
    author: 'Leo Babauta',
  },
  {
    title: 'Identity-Based Habits',
    subtitle: 'Shift from "what" to "who"',
    description: 'Outcome goals ("I want to lose 5kg") create temporary effort. Identity shifts ("I am someone who prioritizes daily nourishment and strength") create lifelong consistency.',
    quote: 'Every action you take is a vote for the person you wish to become.',
    author: 'James Clear',
  },
  {
    title: 'Habit Stacking',
    subtitle: 'Anchor new actions to established anchors',
    description: 'Connect a desired new habit directly to an existing automatic cue: "After I pour my morning coffee [Current], I will drink 500ml water and take my vitamins [New]."',
    quote: 'Pair what you want to do with what you already do.',
    author: 'Dr. BJ Fogg',
  },
  {
    title: 'Environment Design Beats Willpower',
    subtitle: 'Make good choices the path of least resistance',
    description: 'Willpower is an exhaustible daily resource. Keep fruit and cut vegetables visible at eye level in the fridge; keep workout clothes laid out the night before.',
    quote: 'Environment is the invisible hand that shapes human behavior.',
    author: 'Behavioral Economics Principle',
  },
  {
    title: 'The "Never Miss Twice" Rule',
    subtitle: 'Break the all-or-nothing trap',
    description: 'Missing one workout or eating an unplanned meal is a temporary event. Missing twice is the start of a new habit. Recover immediately at your very next meal or day.',
    quote: 'Perfection is the enemy of consistency.',
    author: 'Habit Formation Research',
  },
  {
    title: 'Track Consistency Over Perfection',
    subtitle: 'Visual proof of momentum',
    description: 'Seeing your progress visually (checking off days) activates the brain’s dopamine reward loop, reinforcing the behavior long before physical changes appear in the mirror.',
    quote: 'What gets measured gets managed.',
    author: 'Peter Drucker',
  }
];

export const THIRTY_DAY_CHALLENGE: HabitDay[] = [
  // WEEK 1: HYDRATION + WALKING (DAYS 1-7)
  {
    day: 1,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'The Morning Hydration Anchor',
    description: 'Start your morning with a large glass (400–500ml) of room-temperature or warm water before touching caffeine.',
    actionItems: [
      'Place a filled water bottle on your bedside table or kitchen counter tonight.',
      'Drink 500ml upon waking before your tea or coffee.',
      'Notice your morning alertness without relying purely on caffeine.'
    ],
    psychologyInsight: 'Morning dehydration mimics fatigue and sugar cravings. Rehydrating resets cognitive clarity in 10 minutes.',
    reflectionQuestion: 'How did drinking water first thing change your morning energy levels?'
  },
  {
    day: 2,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'The 15-Minute Post-Meal Walk',
    description: 'Take a brisk 10–15 minute walk immediately after lunch or dinner today.',
    actionItems: [
      'Set an alarm right after your largest meal.',
      'Step outside or walk around your office corridor/home.',
      'Leave your phone in your pocket or listen to an educational podcast.'
    ],
    psychologyInsight: 'Postprandial (post-meal) walking activates skeletal muscle GLUT4 transporters, reducing post-meal blood sugar spikes by up to 30%.',
    reflectionQuestion: 'Did walking after your meal prevent the typical afternoon sluggishness?'
  },
  {
    day: 3,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'Desk Worker Micro-Breaks',
    description: 'Break prolonged sitting by standing and stretching for 2 minutes every hour of seated work.',
    actionItems: [
      'Use a gentle reminder app or smartwatch nudge every 60 minutes.',
      'Stand up, do 5 shoulder rolls, 5 torso twists, and 10 calf raises.',
      'Refill your water glass.'
    ],
    psychologyInsight: 'Micro-movements maintain insulin sensitivity and prevent lumbar spine compression throughout long desk hours.',
    reflectionQuestion: 'How does your lower back and neck feel after adding micro-breaks?'
  },
  {
    day: 4,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'Track Your Baseline Daily Steps',
    description: 'Check your phone or watch pedometer to understand your honest baseline step count without judgment.',
    actionItems: [
      'Check your average daily steps over the last 7 days.',
      'Identify 2 effortless opportunities to add 1,000 steps (e.g. pacing during phone calls, parking further).',
      'Aim for at least 6,500–8,000 steps today.'
    ],
    psychologyInsight: 'Awareness is the first step of habit alteration. What is measured becomes observable and manageable.',
    reflectionQuestion: 'What are the easiest parts of your daily routine to weave in walking?'
  },
  {
    day: 5,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'Liquid Calorie Audit',
    description: 'Review your beverage choices today—coffees with syrups, packaged juices, sweetened iced teas, and sodas.',
    actionItems: [
      'Count how many liquid sugar servings you typically consume in a day.',
      'Swap one sweetened beverage for water, herbal tea, or black coffee/plain green tea.',
      'Notice that liquid sugars fail to trigger brain satiety cues.'
    ],
    psychologyInsight: 'Liquid calories bypass fullness hormones (leptin and CCK), contributing high calories with zero satiety.',
    reflectionQuestion: 'Which high-sugar beverage can you happily replace with a healthier alternative?'
  },
  {
    day: 6,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'The Weekend Outdoor Walk',
    description: 'Spend 30–45 minutes walking outdoors in nature, a local park, or a quiet street in morning daylight.',
    actionItems: [
      'Walk at a comfortable conversational pace in the morning sun.',
      'Expose your eyes to natural sunlight (without looking directly at the sun) to calibrate your circadian clock.',
      'Breathe deeply through your nose.'
    ],
    psychologyInsight: 'Morning sunlight exposure regulates nocturnal melatonin production, leading to significantly deeper sleep.',
    reflectionQuestion: 'How does outdoor natural light influence your mood compared to indoor treadmill walking?'
  },
  {
    day: 7,
    week: 1,
    phase: 'Hydration & Movement Foundation',
    title: 'Week 1 Review & Consistency Win',
    description: 'Celebrate completing your first week of hydration and movement habits. You have laid the foundation!',
    actionItems: [
      'Review your water intake and step totals from the past 7 days.',
      'Acknowledge your progress—habits are forming.',
      'Prepare your mindset for adding protein and balanced meal structures in Week 2.'
    ],
    psychologyInsight: 'Celebrating small wins creates positive emotional reinforcement, cementing the behavioral loop.',
    reflectionQuestion: 'Which habit from this week felt the most natural to continue?'
  },

  // WEEK 2: PROTEIN & BALANCED MEALS (DAYS 8-14)
  {
    day: 8,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'Anchor Your Breakfast with 20g+ Protein',
    description: 'Transform breakfast from a purely carb-heavy meal (e.g. just bread/cereal) into a protein-anchored start.',
    actionItems: [
      'Choose a solid protein anchor: 2-3 eggs, 100g paneer bhurji, tofu scramble, Greek yogurt bowl, or sprouted moong cheela with paneer.',
      'Notice your hunger levels 3–4 hours later.',
      'Experience zero mid-morning sugar cravings.'
    ],
    psychologyInsight: 'A high-protein breakfast stabilizes ghrelin (the hunger hormone) and prevents the afternoon crash.',
    reflectionQuestion: 'Did a protein-rich breakfast change your urge to snack around 11:00 AM?'
  },
  {
    day: 9,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'The Half-Plate Vegetable Rule',
    description: 'Ensure at least half of your lunch plate is composed of non-starchy vegetables or fresh salad.',
    actionItems: [
      'Add a large bowl of cucumber-carrot salad, sautéed greens, or vegetable stir-fry to your lunch.',
      'Eat the vegetables first or alongside your protein before finishing carbohydrates.',
      'Enjoy the chewing time and natural fiber volume.'
    ],
    psychologyInsight: 'Food volume activates stomach stretch receptors, signaling fullness to the hypothalamus before excess calories are consumed.',
    reflectionQuestion: 'Did filling half your plate with colorful veggies make you feel comfortably satisfied?'
  },
  {
    day: 10,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'Identify Your Quality Protein Sources',
    description: 'Learn your go-to vegetarian or non-vegetarian protein staples and ensure they are stocked at home.',
    actionItems: [
      'List 5 high-protein foods you genuinely enjoy eating (e.g., paneer, eggs, lentils, edamame, fish, chicken, tofu).',
      'Check your kitchen pantry and grocery list.',
      'Aim for a protein source in both lunch and dinner today.'
    ],
    psychologyInsight: 'Decision fatigue leads to poor food choices. When high-protein staples are already pre-stocked, good eating is effortless.',
    reflectionQuestion: 'Which 3 protein sources are easiest for you to prepare quickly during busy workdays?'
  },
  {
    day: 11,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'Slow Down & Chew Mindfully',
    description: 'Spend at least 15–20 minutes eating your meal without screens, emails, or hurried multitasking.',
    actionItems: [
      'Put your phone aside during dinner.',
      'Chew each bite thoroughly and set your fork or spoon down between mouthfuls.',
      'Stop eating when you are 80% full (the Japanese practice of Hara Hachi Bu).'
    ],
    psychologyInsight: 'It takes approximately 20 minutes for satiety signals (leptin, GLP-1, PYY) to travel from your digestive tract to your brain.',
    reflectionQuestion: 'Did eating without a screen help you better tune into your body’s true fullness cues?'
  },
  {
    day: 12,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'The Fiber Boost: 25g+ Target',
    description: 'Incorporate legumes, seeds, whole grains, and leafy greens to reach your daily fiber target.',
    actionItems: [
      'Include 1 tablespoon of chia seeds or ground flaxseed in your diet today.',
      'Choose a whole grain (millets, oats, whole wheat, or unpolished rice) over refined flour (maida).',
      'Drink sufficient water to help the fiber move smoothly through your digestive tract.'
    ],
    psychologyInsight: 'Dietary fiber ferments into Short-Chain Fatty Acids (SCFAs) like butyrate, which directly nourish the colon lining and support metabolic health.',
    reflectionQuestion: 'How did your digestion and satiety feel with higher fiber foods today?'
  },
  {
    day: 13,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'Smart Snacking: Swap Refined for Nutrient-Dense',
    description: 'Replace processed biscuits, namkeen, or chips with whole-food nutrient snacks.',
    actionItems: [
      'Keep a jar of roasted chana (chickpeas), mixed almonds and walnuts, or boiled eggs at your office desk.',
      'If you feel 4:00 PM hunger, ask: "Am I truly hungry or just bored/stressed?"',
      'Choose the whole-food option with protein or healthy fats.'
    ],
    psychologyInsight: 'Most afternoon snacking is a stress/boredom habit cue. Replacing the snack item satisfies the ritual without empty calories.',
    reflectionQuestion: 'What whole-food snack did you choose, and how long did it keep you full?'
  },
  {
    day: 14,
    week: 2,
    phase: 'Protein & Balanced Nutrition',
    title: 'Week 2 Review: The Balanced Plate Mastery',
    description: 'Look back at your meals over the past week. You now understand how to balance protein, carbs, fats, and fiber.',
    actionItems: [
      'Assess how your energy, digestion, and mid-day crashes have improved.',
      'Notice that you did not starve or follow a rigid diet chart—you learned how to construct meals.',
      'Prepare for introducing strength training and resistance exercise in Week 3.'
    ],
    psychologyInsight: 'Competence breeds autonomy and long-term adherence. Understanding nutrition removes anxiety around food.',
    reflectionQuestion: 'How has your mindset shifted from "restricting food" to "nourishing your body"?'
  },

  // WEEK 3: STRENGTH TRAINING & MOVEMENT (DAYS 15-21)
  {
    day: 15,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Bodyweight Strength Fundamentals',
    description: 'Perform a 15-minute bodyweight routine: squats, push-ups (or wall/knee push-ups), glute bridges, and planks.',
    actionItems: [
      'Perform 3 sets: 10 Bodyweight Squats, 8 Incline/Floor Push-ups, 12 Glute Bridges, and a 20-second Plank.',
      'Focus on slow, controlled movement and proper breathing.',
      'Rest 60 seconds between sets.'
    ],
    psychologyInsight: 'Resistance training creates mechanical tension that signals your muscles to retain lean mass, even in busy periods.',
    reflectionQuestion: 'How did it feel to challenge your muscles with deliberate resistance?'
  },
  {
    day: 16,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Posture & Thoracic Spine Mobility',
    description: 'Dedicate 10 minutes to opening up tight chest muscles, upper back, and hip flexors caused by desk sitting.',
    actionItems: [
      'Perform Cat-Cow stretches (10 reps).',
      'Perform Doorway Chest Stretch (30 seconds per side).',
      'Perform Kneeling Hip Flexor Stretch (45 seconds per side).'
    ],
    psychologyInsight: 'Mobility restores natural joint range of motion, reducing chronic tension headaches and lower back discomfort.',
    reflectionQuestion: 'Did this routine help release tightness in your shoulders or neck?'
  },
  {
    day: 17,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Progressive Overload Concept',
    description: 'Learn the foundational rule of fitness: gently progressing weight, reps, or control over time.',
    actionItems: [
      'Take a set of dumbbells or water bottles/resistance bands.',
      'Perform Goblet Squats, Romanian Deadlifts, and Overhead Presses.',
      'Note down the weight and reps you completed in your notebook or phone.'
    ],
    psychologyInsight: 'Your body adapts specifically to the demands placed upon it. Recording your lifts provides tangible proof of getting stronger.',
    reflectionQuestion: 'What exercise felt most empowering to perform today?'
  },
  {
    day: 18,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Zone 2 Steady-State Cardio',
    description: 'Engage in 20–30 minutes of low-intensity aerobic activity where you can still speak in full sentences.',
    actionItems: [
      'Fast-paced walking on an incline, light cycling, or swimming.',
      'Keep heart rate at a conversational pace (approx. 60–70% of max heart rate).',
      'Enjoy the aerobic base-building without feeling exhausted.'
    ],
    psychologyInsight: 'Zone 2 cardio builds mitochondrial density and enhances cardiac stroke volume without creating excess systemic fatigue.',
    reflectionQuestion: 'Did you maintain a comfortable conversational pace throughout the session?'
  },
  {
    day: 19,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Core Stability & Hip Health',
    description: 'Strengthen the stabilizing muscles of your core and pelvis for bulletproof lower back health.',
    actionItems: [
      'Perform 3 rounds: Bird-Dogs (10 reps/side), Deadbugs (10 reps/side), and Side Planks (20s/side).',
      'Brace your abdominal wall as if preparing to take a punch.',
      'Breathe smoothly without holding your breath.'
    ],
    psychologyInsight: 'True core strength is about resisting unwanted motion (anti-extension, anti-rotation) rather than just doing hundreds of crunches.',
    reflectionQuestion: 'Did you feel the deep stabilizer muscles engaging around your spine?'
  },
  {
    day: 20,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Active Recovery & Stretching',
    description: 'Give your muscular system time to repair through light walking, gentle yoga, and deep tissue foam rolling.',
    actionItems: [
      'Take a gentle 30-minute evening walk.',
      'Spend 10 minutes stretching hamstrings, calves, and quads.',
      'Drink adequate electrolytes and water.'
    ],
    psychologyInsight: 'Muscles do not grow or tone during workouts; they adapt and rebuild during intentional recovery periods.',
    reflectionQuestion: 'How refreshed do your joints and muscles feel after active recovery?'
  },
  {
    day: 21,
    week: 3,
    phase: 'Strength & Functional Movement',
    title: 'Week 3 Review: Embracing Strength',
    description: 'Reflect on how strength training and mobility have impacted your energy, posture, and self-confidence.',
    actionItems: [
      'Notice any reduction in daily stiffness and improvements in physical stamina.',
      'Appreciate your physical capability regardless of your starting point.',
      'Get ready to integrate sleep hygiene, meal prep routines, and long-term consistency in Week 4.'
    ],
    psychologyInsight: 'Strength training builds self-efficacy—the deep psychological belief in your ability to handle physical and mental demands.',
    reflectionQuestion: 'How has moving with intention affected your daily confidence?'
  },

  // WEEK 4: SLEEP, MEAL PLANNING & SUSTAINABILITY (DAYS 22-30)
  {
    day: 22,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'The Digital Sunset Routine',
    description: 'Shut off bright work monitors, smartphones, and televisions at least 45 minutes before bedtime.',
    actionItems: [
      'Switch devices to night mode / warm tint by 8:00 PM.',
      'Charge your phone outside of arm’s reach from your bed.',
      'Read a physical book, journal, or practice 5 minutes of slow belly breathing.'
    ],
    psychologyInsight: 'Blue light spectrum suppresses nocturnal melatonin secretion by up to 50%, delaying REM and deep restorative sleep.',
    reflectionQuestion: 'Did putting your phone away earlier improve your sleep onset speed?'
  },
  {
    day: 23,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Sunday / Midweek Meal Prep Ritual',
    description: 'Spend 45 minutes pre-cooking or preparing core meal foundations for the upcoming workdays.',
    actionItems: [
      'Boil a batch of chickpeas or sprouted moong.',
      'Chop a container of mixed vegetables and wash salad greens.',
      'Prepare a batch of hung curd/raita or marinated paneer/chicken for quick 10-minute cooking.'
    ],
    psychologyInsight: 'Pre-commitment eliminates friction. When healthy food is the fastest option in your kitchen, adherence becomes automatic.',
    reflectionQuestion: 'How much stress did having pre-chopped ingredients or boiled legumes save you?'
  },
  {
    day: 24,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'The Optimized Sleep Sanctuary',
    description: 'Set up your bedroom environment for optimal temperature, darkness, and quiet.',
    actionItems: [
      'Keep bedroom temperature cool (around 19–21°C / 66–70°F if possible).',
      'Ensure complete darkness with blackout curtains or a comfortable eye mask.',
      'Avoid heavy meals or alcohol within 3 hours of sleeping.'
    ],
    psychologyInsight: 'Core body temperature must drop by ~1°C to initiate restful non-REM deep sleep.',
    reflectionQuestion: 'Did a cooler, darker room improve the depth of your sleep?'
  },
  {
    day: 25,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Social Dining & Restaurant Strategy',
    description: 'Learn how to enjoy social dining and restaurants without feeling guilty or derailed.',
    actionItems: [
      'Scan the menu for protein anchors: tandoori/grilled items, dal tadka, paneer tikka, grilled fish/chicken.',
      'Order a fresh salad or roasted starter for the table first.',
      'Eat mindfully, enjoy the company, and resume your normal routine at the very next meal.'
    ],
    psychologyInsight: 'Dietary flexibility prevents the binge-restrict cycle. One meal out does not ruin a healthy lifestyle.',
    reflectionQuestion: 'How did having a simple game plan make dining out enjoyable and guilt-free?'
  },
  {
    day: 26,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Stress Resilience & Parasympathetic Reset',
    description: 'Practice the physiological sigh (two quick inhales through the nose, one long slow exhale through the mouth) 5 times.',
    actionItems: [
      'Try this breathing exercise when work stress or deadlines spike.',
      'Notice how your heart rate decelerates and muscular tension eases.',
      'Recognize that chronic elevated cortisol promotes abdominal fat storage and cravings.'
    ],
    psychologyInsight: 'The physiological sigh rapidly re-inflates alveoli in the lungs and activates the vagus nerve to lower heart rate within seconds.',
    reflectionQuestion: 'Did this 60-second breathing technique help you de-escalate workday tension?'
  },
  {
    day: 27,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'The "Never Miss Twice" Habit Armor',
    description: 'Anticipate busy travel days, sick days, or overtime work and create your "minimum viable habit".',
    actionItems: [
      'Define your Minimum Viable Habit for hectic days (e.g. 5,000 steps + 1 bottle of water + 1 protein meal).',
      'Promise yourself that even on your busiest days, you will fulfill this baseline.',
      'Maintain the psychological identity of consistency.'
    ],
    psychologyInsight: 'Maintaining the chain on bad days is what separates lifelong healthy individuals from seasonal dieters.',
    reflectionQuestion: 'What is your non-negotiable minimum viable routine when life gets chaotic?'
  },
  {
    day: 28,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Audit Your Environment & Pantry',
    description: 'Clean out temptation triggers and stock your physical spaces with positive nudges.',
    actionItems: [
      'Remove ultra-processed snacks from eyesight; store them out of easy reach or don’t purchase in bulk.',
      'Place a bowl of fresh seasonal fruits on your dining table.',
      'Keep your workout shoes right beside your bedroom door.'
    ],
    psychologyInsight: 'Self-control is a myth of good architecture. People with the best habits simply encounter fewer temptations.',
    reflectionQuestion: 'What visual cue in your home did you optimize today?'
  },
  {
    day: 29,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Long-Term Lifestyle Design',
    description: 'Synthesize everything you have practiced into an effortless weekly rhythm.',
    actionItems: [
      'Review your Weekly Cadence: 3 strength sessions, daily 7,000–10,000 steps, protein & fiber with every meal, 7–8h sleep.',
      'Understand that health is a lifelong practice, not a 30-day destination.',
      'Write down 3 non-negotiable principles you will carry into the next year.'
    ],
    psychologyInsight: 'When healthy behaviors become your default operating system, they stop feeling like "work" or "effort".',
    reflectionQuestion: 'Which habits have now become second nature to you?'
  },
  {
    day: 30,
    week: 4,
    phase: 'Sleep, Meal Prep & Longevity',
    title: 'Graduation & Your Lifelong Blueprint',
    description: 'You completed the 30-Day Healthy Habits Journey! You have transformed your understanding of nutrition, fitness, and daily consistency.',
    actionItems: [
      'Celebrate your incredible commitment and consistency.',
      'Review how much stronger, more energized, and more confident you feel.',
      'Share your experience or continue with our advanced guidance and resources.'
    ],
    psychologyInsight: 'You are no longer "on a diet". You are someone who understands how to eat, how to move, and how to live well.',
    reflectionQuestion: 'What is the biggest transformation you have experienced over these 30 days?'
  }
];
