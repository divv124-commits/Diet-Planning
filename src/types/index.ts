export type PageId =
  | 'home'
  | 'about'
  | 'nutrition'
  | 'fitness'
  | 'habits'
  | 'services'
  | 'resources'
  | 'blog'
  | 'podcast'
  | 'contact';

export interface FoodItem {
  id: string;
  name: string;
  category: 'protein' | 'carbs' | 'fiber' | 'fats' | 'micronutrients';
  type: 'vegetarian' | 'vegan' | 'non-vegetarian';
  servingSize: string;
  calories: number;
  protein: number; // in grams
  carbs: number;   // in grams
  fat: number;     // in grams
  fiber: number;   // in grams
  keyNutrients: string[];
  tips: string;
  isIndianStaple?: boolean;
}

export interface MicronutrientInfo {
  id: string;
  name: string;
  role: string;
  dailyNeed: string;
  deficiencySigns: string[];
  topSources: string[];
  practicalTip: string;
}

export interface HabitDay {
  day: number;
  week: number;
  phase: string;
  title: string;
  description: string;
  actionItems: string[];
  psychologyInsight: string;
  reflectionQuestion: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Nutrition' | 'Fitness' | 'Healthy Habits' | 'Workplace Wellness' | 'Meal Planning' | 'Weight Management' | 'Healthy Aging';
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      callout?: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
  keyTakeaways: string[];
}

export interface PodcastEpisode {
  id: string;
  title: string;
  subtitle: string;
  episodeNumber: number;
  duration: string;
  publishDate: string;
  youtubeId: string;
  startTime?: number;
  youtubeUrl?: string;
  spotifyUrl?: string;
  applePodcastsUrl?: string;
  description: string;
  keyTopics: string[];
  timestamps: { time: string; label: string }[];
  featuredQuote: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Meal Templates' | 'Charts & Guides' | 'Checklists' | 'Fitness' | 'Habit Trackers';
  description: string;
  format: string;
  fileSize: string;
  highlights: string[];
  previewContent: {
    title: string;
    intro: string;
    sections: { heading: string; items: string[] }[];
  };
}

export interface CoachingService {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  format: string;
  badge?: string;
  idealFor: string[];
  notFor: string[];
  whatYouLearn: string[];
  deliverables: string[];
  processSteps: { step: number; title: string; desc: string }[];
  ctaLabel: string;
}
