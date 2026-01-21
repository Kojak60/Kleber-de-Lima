import React, { useEffect, useState } from 'react';
import { X, Check, Star, AlertCircle, ShoppingCart, ExternalLink, ShoppingBag } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewModalProps {
  review: ReviewItem | null;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ review, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (review) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [review]);

  if (!review) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-surface-dark w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Close Button */}
        <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
          <button 
            onClick={onClose}
            className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image Area - Negative margin to go behind close button area */}
        <div className="relative h-64 md:h-80 -mt-[72px] shrink-0">
          <img 
            src={review.image} 
            alt={review.title} 
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {review.category}
              </span>
              {review.date && (
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium bg-white/80 dark:bg-black/50 backdrop-blur px-2 py-0.5 rounded">
                  {review.date}
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-sm">
              {review.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 pt-0 space-y-8">
          
          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300 pb-6 border-b border-gray-100 dark:border-gray-800">
            {review.rating && (
              <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1.5 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">{review.rating}/5.0</span>
              </div>
            )}
            {review.price && (
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg border border-green-100 dark:border-green-900/30">
                <ShoppingCart className="w-4 h-4" />
                <span className="font-bold">{review.price}</span>
              </div>
            )}
            <span className="ml-auto text-gray-400">{review.readTime}</span>
          </div>

          {/* Description */}
          <div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Veredito do Especialista</h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
               {review.fullDescription || review.excerpt}
             </p>
          </div>

          {/* Pros & Cons Grid */}
          {(review.pros || review.cons) && (
            <div className="grid md:grid-cols-2 gap-6">
              {review.pros && (
                <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border border-green-100 dark:border-green-900/20">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" /> Prós
                  </h3>
                  <ul className="space-y-3">
                    {review.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {review.cons && (
                <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-100 dark:border-red-900/20">
                  <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Contras
                  </h3>
                  <ul className="space-y-3">
                    {review.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Specs Table */}
          {review.specs && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Especificações Técnicas</h3>
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-surface-dark">
                    {Object.entries(review.specs).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-semibold text-gray-900 dark:text-white sm:pl-6 w-1/3">
                          {key}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 dark:text-gray-300">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Call to Action Buttons */}
          <div className="pt-6 pb-8 flex flex-col md:flex-row justify-center gap-4">
             <a 
               href="https://mercadolivre.com/sec/17U8LUa" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex-1 max-w-sm bg-[#ffe600] hover:bg-[#fff159] text-[#2d3277] font-bold text-lg px-6 py-4 rounded-xl shadow-xl shadow-yellow-500/20 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-center"
             >
               Ver no Mercado Livre
               <ShoppingBag className="w-5 h-5" />
             </a>
             
             <a 
               href="https://shopee.com.br/shop/940535677" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex-1 max-w-sm bg-[#ee4d2d] hover:bg-[#ff5733] text-white font-bold text-lg px-6 py-4 rounded-xl shadow-xl shadow-orange-500/20 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-center"
             >
               Ver na Shopee
               <ExternalLink className="w-5 h-5" />
             </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewModal;