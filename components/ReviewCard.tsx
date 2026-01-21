import React from 'react';
import { ArrowRight, Star, Utensils, Cpu, Monitor, Plane, Tent, Sparkles, Tag, Award } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewCardProps {
  review: ReviewItem;
  onClick: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onClick }) => {
  // Determine badge color based on metadata
  let badgeColor = 'text-primary';
  if (review.isNew) badgeColor = 'text-purple-600 dark:text-purple-400';
  if (review.isPopular) badgeColor = 'text-accent-coral';

  const getCategoryIcon = (category: string) => {
    const iconClass = "w-3 h-3";
    switch (category) {
      case 'Cozinha': return <Utensils className={iconClass} />;
      case 'Tech': return <Cpu className={iconClass} />;
      case 'Home Office': return <Monitor className={iconClass} />;
      case 'Viagem': return <Plane className={iconClass} />;
      case 'Ar Livre': return <Tent className={iconClass} />;
      case 'Beleza': return <Sparkles className={iconClass} />;
      default: return <Tag className={iconClass} />;
    }
  };

  return (
    <article 
      onClick={onClick}
      className="group flex flex-col h-full bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Tags Container */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2 items-start">
          
          {/* Editor Choice Tag - Melhor Compra */}
          {review.isEditorChoice && (
            <div className="bg-accent-coral text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide shadow-md flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
              <Award className="w-3 h-3 fill-current" />
              Melhor Compra
            </div>
          )}

          {/* Category Tag */}
          <div className="bg-white/95 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide text-gray-900 dark:text-white shadow-sm flex items-center gap-2">
            {getCategoryIcon(review.category)}
            {review.category}
          </div>
        </div>

        <img 
          src={review.image} 
          alt={review.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {review.rating && (
          <div className="absolute bottom-3 right-3 z-10 bg-black/80 text-white px-2 py-1 rounded flex items-center gap-1 text-xs font-bold">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {review.rating}
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold uppercase ${badgeColor}`}>
            {review.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span className="text-xs text-gray-400 font-medium">{review.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
          {review.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2">
          {review.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <span className="text-sm font-bold text-primary flex items-center gap-1 group/btn">
            Ler Guia 
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </span>
          {review.price && (
             <span className="text-sm font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
               {review.price}
             </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;