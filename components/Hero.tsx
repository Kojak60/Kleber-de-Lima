import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onOpenFeatured: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenFeatured }) => {
  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-coral/10 border border-accent-coral/20 w-fit">
              <Award className="w-4 h-4 text-accent-coral" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent-coral">Escolha do Editor • Outubro</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              O Guia Definitivo de Robôs Aspiradores
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Testamos 15 modelos líderes em casas reais por 30 dias para encontrar aquele que realmente lida com pelos de animais sem travar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={onOpenFeatured}
                className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
              >
                Ler Avaliação Completa
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-3 px-2 py-2">
                <div className="flex -space-x-3">
                  <img 
                    src={IMAGES.USER_1} 
                    alt="Avaliador 1" 
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" 
                  />
                  <img 
                    src={IMAGES.USER_2} 
                    alt="Avaliador 2" 
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Testado por humanos</span>
                  <span className="text-xs text-gray-500">Atualizado há 2 dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] shadow-2xl shadow-gray-200/50 dark:shadow-none group cursor-pointer"
              onClick={onOpenFeatured}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
              <img 
                src={IMAGES.HERO_VACUUM} 
                alt="Roborock S8 Pro Ultra" 
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-black/80 backdrop-blur px-5 py-3 rounded-xl shadow-lg border border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Vencedor</p>
                <p className="font-bold text-lg text-gray-900 dark:text-white">Roborock S8 Pro Ultra</p>
              </div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;