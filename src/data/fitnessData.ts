export interface FitnessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  keyPrinciples: string[];
  sampleRoutine: {
    name: string;
    duration: string;
    exercises: { name: string; sets: string; reps: string; cues: string }[];
  };
}

export const FITNESS_PILLARS: FitnessPillar[] = [
  {
    id: 'strength',
    title: 'Strength & Resistance Training',
    subtitle: 'The cornerstone of metabolic health & longevity',
    description: 'Strength training is not just for bodybuilders—it is the single most potent stimulus to preserve skeletal muscle, build bone mineral density, optimize glucose uptake, and maintain physical independence as we age.',
    benefits: [
      'Preserves and builds lean muscle mass to counteract sarcopenia (age-related muscle loss)',
      'Stimulates osteoblast activity, significantly enhancing bone density and preventing osteopenia',
      'Acts as a massive metabolic sink for glucose, drastically improving insulin sensitivity',
      'Supports connective tissue, joint integrity, and spinal support for desk workers',
      'Builds functional strength for daily life (lifting luggage, playing with children, climbing stairs with ease)'
    ],
    keyPrinciples: [
      'Compound movements first (Squat, Hinge, Push, Pull, Carry)',
      'Progressive overload: Gradually adding weight, reps, or control over time',
      '2–4 sessions per week of 40–50 minutes is more than enough for exceptional results',
      'Form and biomechanics always take priority over the weight on the bar'
    ],
    sampleRoutine: {
      name: 'Full-Body Foundation Routine (Beginner–Intermediate)',
      duration: '40–45 mins (2–3x/week)',
      exercises: [
        { name: 'Goblet Squat (Dumbbell or Kettlebell)', sets: '3 sets', reps: '8–10 reps', cues: 'Chest upright, knees tracking over toes, sit back between hips.' },
        { name: 'Dumbbell Romanian Deadlift (RDL)', sets: '3 sets', reps: '10–12 reps', cues: 'Hinge at hips, soft knees, push glutes backward, flat back.' },
        { name: 'Dumbbell Overhead / Incline Bench Press', sets: '3 sets', reps: '8–10 reps', cues: 'Elbows at 45-degree angle, core braced, full lockout at top.' },
        { name: 'One-Arm Dumbbell Row / Chest-Supported Row', sets: '3 sets', reps: '10–12 reps/side', cues: 'Pull elbow toward hip pocket, squeeze shoulder blade without shrugging.' },
        { name: 'Plank or Deadbug Hold', sets: '3 sets', reps: '30–45 seconds', cues: 'Ribcage down, glutes squeezed, active abdominal brace.' }
      ]
    }
  },
  {
    id: 'walking',
    title: 'Daily Walking & NEAT',
    subtitle: 'The unsung hero of daily energy expenditure',
    description: 'Non-Exercise Activity Thermogenesis (NEAT) accounts for significantly more daily calorie expenditure than a 45-minute gym session. Walking is gentle on joints, promotes mental clarity, and aids glycemic regulation.',
    benefits: [
      'Blunts postprandial glucose spikes when done for 10–15 minutes after meals',
      'Gentle on joints with virtually zero systemic recovery cost',
      'Lowers cortisol and stimulates creative problem solving during workdays',
      'Improves venous return of blood from lower extremities during long seated shifts'
    ],
    keyPrinciples: [
      'Target an achievable step baseline (e.g. 7,000–10,000 steps daily)',
      'Accumulate steps in 3 distinct windows: morning stroll, post-lunch lap, evening decompression',
      'Pace during phone calls or virtual meetings where video is not required'
    ],
    sampleRoutine: {
      name: 'The 3-Window Daily Walking Rhythm',
      duration: 'Accumulated throughout the day',
      exercises: [
        { name: 'Morning Circadian Light Walk', sets: '1 session', reps: '15 mins', cues: 'Natural light exposure, outdoor brisk pace.' },
        { name: 'Post-Lunch Glucose Blunter Walk', sets: '1 session', reps: '10–15 mins', cues: 'Immediate light walking after eating to activate muscle GLUT4.' },
        { name: 'Evening Stress Decompression Walk', sets: '1 session', reps: '20 mins', cues: 'Conversational pace, slow nasal breathing, leaving phone behind.' }
      ]
    }
  },
  {
    id: 'cardio',
    title: 'Cardiovascular & Zone 2 Fitness',
    subtitle: 'Mitochondrial efficiency and heart resilience',
    description: 'Zone 2 cardiovascular training develops the heart’s stroke volume and increases mitochondrial density in slow-twitch muscle fibers, improving endurance and metabolic flexibility.',
    benefits: [
      'Trains cells to efficiently oxidize fatty acids for fuel at rest and submaximal effort',
      'Strengthens left ventricle stroke volume, reducing resting heart rate',
      'Improves lactate clearance capacity and general workout recovery capacity',
      'Promotes neuroplasticity and cardiovascular longevity'
    ],
    keyPrinciples: [
      'Conversational pace test: You can speak in complete sentences without gasping for breath',
      'Keep heart rate approximately around 60–70% of maximum heart rate',
      '1–2 sessions of 25–40 minutes weekly (e.g., incline treadmill walk, stationary cycling, swimming)'
    ],
    sampleRoutine: {
      name: 'Incline Treadmill or Outdoor Ruck / Cycle',
      duration: '30 mins (1–2x/week)',
      exercises: [
        { name: 'Warm-up Easy Flat Walk', sets: '1 set', reps: '5 mins', cues: 'Gradually bring heart rate up.' },
        { name: 'Steady Incline Walk (8–12% incline at 4.5–5.5 km/h)', sets: '1 set', reps: '20 mins', cues: 'Nasal breathing preferred, arms swinging freely.' },
        { name: 'Cool-down Flat Walk', sets: '1 set', reps: '5 mins', cues: 'Let heart rate settle below 100 bpm.' }
      ]
    }
  },
  {
    id: 'mobility',
    title: 'Desk Worker Mobility & Joint Health',
    subtitle: 'Undo the physical strain of 8+ hours at a desk',
    description: 'Prolonged sitting causes tight hip flexors, rounded thoracic spine, and forward head carriage. Targeted daily mobility restores optimal joint positioning and prevents postural aches.',
    benefits: [
      'Relieves chronic upper back stiffness, neck tightness, and tension headaches',
      'Unlocks anterior hip capsule and promotes proper glute recruitment during standing and walking',
      'Enhances synovial fluid circulation in spinal facet joints and shoulder girdles'
    ],
    keyPrinciples: [
      'Daily 5–10 minute micro-sessions are far more effective than an occasional 1-hour session',
      'Move joints through full pain-free ranges of motion with controlled breathing',
      'Combine dynamic mobility before workouts with static relaxing stretches before bedtime'
    ],
    sampleRoutine: {
      name: 'Desk Worker 5-Minute Reset Routine',
      duration: '5–8 mins',
      exercises: [
        { name: 'Cat-Cow Spinal Waves', sets: '2 sets', reps: '8 slow cycles', cues: 'Inhale arching back, exhale rounding spine tucking chin.' },
        { name: 'World’s Greatest Stretch (Lunge with Thoracic Rotation)', sets: '2 sets', reps: '5 reps/side', cues: 'Deep lunge, rotate chest towards front knee, reach arm to ceiling.' },
        { name: 'Doorway Chest / Pectoral Opener', sets: '2 sets', reps: '30s hold/side', cues: 'Forearm on door frame, step through gently until mild stretch in chest.' },
        { name: 'Half-Kneeling Hip Flexor Stretch with Glute Squeeze', sets: '2 sets', reps: '45s hold/side', cues: 'Tuck pelvis under, squeeze rear glute forward gently.' }
      ]
    }
  },
  {
    id: 'recovery',
    title: 'Recovery, Sleep & Stress Management',
    subtitle: 'Where adaptation and tissue repair actually occur',
    description: 'Exercise is the catabolic stimulus; sleep, nutrition, and stress management are the anabolic repair mechanism. Without adequate recovery, training simply accumulates systemic inflammation.',
    benefits: [
      'Growth hormone and cellular repair peak during deep slow-wave sleep (stages 3 & 4)',
      'Restores central nervous system neurotransmitter pools and motor unit firing rates',
      'Normalizes appetite hormones (ghrelin and leptin) to prevent stress-induced snacking'
    ],
    keyPrinciples: [
      'Target 7–8 hours of consistent, high-quality sleep nightly',
      'Maintain consistent wake and sleep times within a 30-minute window, even on weekends',
      'Incorporate active rest days with light walking and hydration rather than complete bed rest'
    ],
    sampleRoutine: {
      name: 'Evening Wind-Down Protocol',
      duration: '30 mins before sleep',
      exercises: [
        { name: 'Digital Sunset (Screens off / dimmed warm lighting)', sets: '1 habit', reps: '45 mins prior', cues: 'Switch from work tasks to analog books or calming music.' },
        { name: 'Legs-Up-The-Wall (Viparita Karani) / Parasympathetic Breathing', sets: '1 set', reps: '5–10 mins', cues: 'Lie with legs rested up a wall, inhale 4s, exhale 8s to calm the vagus nerve.' },
        { name: 'Hydration & Magnesium Anchor', sets: '1 glass', reps: 'Room temp water', cues: 'Small glass of water with light electrolyte/magnesium support if recommended.' }
      ]
    }
  }
];

export const BEGINNER_FITNESS_MYTHS = [
  {
    myth: 'Strength training will make women look bulky.',
    truth: 'Women possess a fraction of the circulating testosterone required for extreme muscular bulk. Lifting weights creates a lean, strong, and metabolically active physique while strengthening bones and joints.'
  },
  {
    myth: 'Cardio is the best exercise for weight loss.',
    truth: 'Cardio burns calories during the session, but strength training builds and preserves metabolically active muscle that burns energy 24/7. The ideal approach combines strength training, daily walking, and mindful nutrition.'
  },
  {
    myth: 'You need to spend 2 hours in the gym every day.',
    truth: 'High-quality, focused 40-minute resistance sessions 3 times per week produce exceptional strength, postural, and health adaptations. Consistency and progressive intensity matter far more than gym duration.'
  },
  {
    myth: 'No pain, no gain: workouts must leave you crippled with soreness.',
    truth: 'Extreme muscle soreness (DOMS) is a sign of novel tissue damage, not superior progress. The goal is to stimulate adaptation, not annihilate your recovery capacity—especially when balancing a busy career.'
  }
];
