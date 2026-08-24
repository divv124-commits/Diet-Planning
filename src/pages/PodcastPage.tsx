import React, { useState } from 'react';
import { PageId, PodcastEpisode } from '../types';
import { PODCAST_EPISODES } from '../data/podcastData';
import {
  Play,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Radio
} from 'lucide-react';

interface PodcastPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onShowToast: (msg: string) => void;
}

export const PodcastPage: React.FC<PodcastPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onShowToast,
}) => {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [expandedEpisodeId, setExpandedEpisodeId] = useState<string | null>(PODCAST_EPISODES[0].id);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Broadcast & Video Series</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              The Nourish & Move Podcast.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Deep-dive explorations on bioenergetics, progressive resistance programming, environmental habit friction, and managing high-energy vitality alongside an intense professional career.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED EPISODE PLAYER / VIDEO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video Player */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-950 border border-slate-800">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeEpisode.youtubeId}?start=${activeEpisode.startTime || 0}&rel=0`}
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Episode Details */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="bg-slate-900 text-emerald-400 font-bold px-2.5 py-0.5 rounded-md">
                  Episode {activeEpisode.episodeNumber}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeEpisode.duration}
                </span>
                <span>•</span>
                <span>{activeEpisode.publishDate}</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeEpisode.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeEpisode.description}
              </p>

              {/* Timestamps */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-xs uppercase font-mono tracking-wider text-slate-900 flex items-center justify-between">
                  <span>Key Episode Timestamps:</span>
                  {activeEpisode.startTime && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded font-mono">
                      Starts @ {Math.floor(activeEpisode.startTime / 60)}:06
                    </span>
                  )}
                </div>
                <div className="space-y-1 text-xs text-slate-700">
                  {activeEpisode.timestamps.slice(0, 4).map((ts, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="font-mono text-emerald-700 font-bold">{ts.time}</span>
                      <span>—</span>
                      <span className="truncate">{ts.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={activeEpisode.youtubeUrl || `https://youtube.com/watch?v=${activeEpisode.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Watch on YouTube</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. ALL EPISODES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <span>Archive</span>
          </div>
          <h3 className="font-heading text-3xl font-extrabold text-slate-900">
            All Episodes & Show Notes
          </h3>
        </div>

        <div className="space-y-3">
          {PODCAST_EPISODES.map((ep) => {
            const isSelected = activeEpisode.id === ep.id;
            const isExpanded = expandedEpisodeId === ep.id;

            return (
              <div
                key={ep.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isSelected ? 'border-slate-900 shadow-md ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span className="font-bold text-emerald-700 uppercase tracking-wider">
                        Episode {ep.episodeNumber}
                      </span>
                      <span>•</span>
                      <span>{ep.duration}</span>
                      <span>•</span>
                      <span>{ep.publishDate}</span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-slate-900">
                      {ep.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 max-w-3xl leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setActiveEpisode(ep);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                      <span>Play</span>
                    </button>

                    <button
                      onClick={() => setExpandedEpisodeId(isExpanded ? null : ep.id)}
                      className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                      aria-label="Toggle show notes"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                </div>

                {/* EXPANDABLE SHOW NOTES & TIMESTAMPS */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-b-2xl animate-in fade-in duration-150 text-xs">
                    <div>
                      <h5 className="font-bold text-xs uppercase font-mono tracking-wider text-slate-900 mb-2">Show Notes & Themes:</h5>
                      <ul className="space-y-1.5 text-slate-700">
                        {ep.keyTopics.map((k, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold font-mono">✓</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-xs uppercase font-mono tracking-wider text-slate-900 mb-2">Detailed Timestamps:</h5>
                      <div className="space-y-1 font-mono text-slate-700">
                        {ep.timestamps.map((ts, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-emerald-700 font-bold">{ts.time}</span>
                            <span>—</span>
                            <span className="font-sans">{ts.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
