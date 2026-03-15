import { ChevronRight, Loader2 } from 'lucide-react';
import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PromptCard from '../components/PromptCard';
import { prompts } from '../data/prompts';

const PROMPTS_PER_PAGE = 13;

export default function AllPrompts() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const categories = useMemo(() => {
    const tags = new Set<string>();
    prompts.forEach(prompt => {
      prompt.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedCount, setDisplayedCount] = useState(PROMPTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filteredPrompts = useMemo(() => {
    let filtered = prompts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(prompt => prompt.tags.includes(selectedCategory));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(prompt => 
        prompt.title.toLowerCase().includes(query) || 
        prompt.promptText.toLowerCase().includes(query) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const displayedPrompts = useMemo(() => {
    return filteredPrompts.slice(0, displayedCount);
  }, [filteredPrompts, displayedCount]);

  const hasMore = displayedCount < filteredPrompts.length;

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + PROMPTS_PER_PAGE, filteredPrompts.length));
      setIsLoading(false);
    }, 1000);
  }, [isLoading, hasMore, filteredPrompts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMore, hasMore, isLoading]);

  // Reset count when category or search query changes
  useEffect(() => {
    setDisplayedCount(PROMPTS_PER_PAGE);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'AI Prompts'}
        </h1>
        <p className="text-slate-400 text-lg">
          {searchQuery 
            ? `Found ${filteredPrompts.length} prompt${filteredPrompts.length === 1 ? '' : 's'} matching your search`
            : 'Browse our collection of AI image generation prompts'
          }
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors capitalize ${
              selectedCategory === category
                ? 'bg-indigo-500 text-white'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
        <button className="p-2.5 rounded-full bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 transition-colors shrink-0">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedPrompts.map((prompt) => (
          <PromptCard key={prompt.id} {...prompt} />
        ))}
      </div>

      {hasMore && (
        <div 
          ref={loaderRef}
          className="flex items-center justify-center py-12 text-slate-400"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
              <span className="text-lg font-medium">Loading more...</span>
            </div>
          ) : (
            <div className="h-6" /> // Spacer to maintain height when not loading but has more
          )}
        </div>
      )}

      {!hasMore && displayedPrompts.length > 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-sm">You've reached the end of the prompts.</p>
        </div>
      )}

      {displayedPrompts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No prompts found for this category.</p>
        </div>
      )}
    </div>
  );
}
