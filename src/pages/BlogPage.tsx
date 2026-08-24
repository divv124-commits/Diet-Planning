import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  selectedPostSlug?: string | null;
  onSelectPost: (slug: string | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenConsultation,
  selectedPostSlug,
  onSelectPost,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const activePost = useMemo(() => {
    if (!selectedPostSlug) return null;
    return BLOG_POSTS.find((p) => p.slug === selectedPostSlug) || null;
  }, [selectedPostSlug]);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const allTags = ['All', 'Protein', 'Meal Structure', 'Strength Training', 'Desk Workers', 'Dining Out'];

  // IF AN ARTICLE IS OPEN FOR READING
  if (activePost) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Back Button */}
        <button
          onClick={() => onSelectPost(null)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-colors cursor-pointer bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4 border-b border-slate-200 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
            <span className="font-bold text-emerald-600 uppercase tracking-wider">{activePost.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {activePost.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activePost.readTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {activePost.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {activePost.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono">
              DR
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900">{activePost.author || 'Divya Ratnakar'}</div>
              <div className="text-slate-500 font-mono text-[11px]">Corporate Professional & Certified Diet Planner</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200/80 space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Key Takeaways at a Glance:</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {activePost.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold font-mono">✓</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p className="text-base leading-relaxed">{activePost.content.intro}</p>

          {activePost.content.sections.map((sec, sidx) => (
            <div key={sidx} className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pidx) => (
                <p key={pidx}>{p}</p>
              ))}

              {sec.callout && (
                <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500 border-y border-r border-slate-200 text-xs text-slate-800 italic">
                  {sec.callout}
                </div>
              )}

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-700">
                  {sec.bulletPoints.map((bp, bidx) => (
                    <li key={bidx}>{bp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-1.5">
            <h3 className="font-heading text-base font-bold text-slate-900">In Summary</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{activePost.content.conclusion}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-slate-400" />
          {activePost.tags.map((t, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-mono font-medium px-2.5 py-0.5 rounded-lg">
              #{t}
            </span>
          ))}
        </div>

        {/* Article Disclaimer */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-900 uppercase text-[10px] font-mono tracking-wider">Educational Scope:</strong> This article is written for general lifestyle and nutritional literacy for healthy adults. It is not clinical medical advice or individualized medical therapy.
          </span>
        </div>

        {/* Coaching Banner */}
        <div className="bg-slate-950 text-white p-8 rounded-2xl text-center space-y-3 border border-slate-800 shadow-xl">
          <h3 className="font-heading text-2xl font-bold text-white">
            Want to put these principles into daily practice?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Join the 30-Day Healthy Habits Program to get weekly guided action steps and direct coaching feedback.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              Apply for Coaching
            </button>
          </div>
        </div>

      </div>
    );
  }

  // DEFAULT BLOG LIST VIEW
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Research & Essays</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              The Nutrition & Strength Journal.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Deeply researched essays on bioenergetic mechanics, muscle retention, meal architectures, and behavioral psychology for working professionals.
            </p>
          </div>

          {/* Search & Tag Filter */}
          <div className="mt-8 space-y-3">
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, nutrient, or title..."
                className="w-full bg-white text-xs text-slate-900 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOG POSTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm font-bold text-slate-900">No articles found.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "protein", "cravings", or "strength".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  onSelectPost(post.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 font-mono mb-2">
                    <span className="font-bold text-emerald-600 uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-900 font-bold group-hover:text-emerald-700 transition-colors uppercase tracking-wider">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
