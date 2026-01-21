import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ReviewCard from './components/ReviewCard';
import ReviewModal from './components/ReviewModal';
import Footer from './components/Footer';
import { AboutPage, ContactPage, PrivacyPage, TermsPage } from './components/pages/StaticPages';
import { REVIEWS, CATEGORIES } from './data';
import { Category, ReviewItem } from './types';
import { Search, Loader2 } from 'lucide-react';
import { supabase } from './lib/supabase';
import Auth from './components/Auth';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS); // Initial static fallback
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredReviews, setFilteredReviews] = useState<ReviewItem[]>(REVIEWS);
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);

  // Newsletter State
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Load More State
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Fetch Reviews from Supabase
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        return;
      }

      if (data) {
        // Map snake_case from DB to camelCase for the app
        const mappedReviews: ReviewItem[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          image: item.image,
          category: item.category,
          date: item.date,
          readTime: item.read_time,
          rating: item.rating,
          price: item.price,
          isEditorChoice: item.is_editor_choice,
          isNew: item.is_new,
          isPopular: item.is_popular,
          fullDescription: item.full_description,
          specs: item.specs,
          pros: item.pros,
          cons: item.cons
        }));
        setReviews(mappedReviews);
        setFilteredReviews(mappedReviews);
      }
    };

    fetchReviews();
  }, []);

  // Auth Listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user && currentView === 'login') {
        setCurrentView('home');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user && currentView === 'login') {
        setCurrentView('home');
      }
    });

    return () => subscription.unsubscribe();
  }, [currentView]);

  // Theme Toggler
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Core Filter Logic (Category + Search)
  useEffect(() => {
    let result = reviews;

    // Filter by Category
    if (selectedCategory !== 'Todos') {
      result = result.filter(review => review.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(review =>
        review.title.toLowerCase().includes(query) ||
        review.excerpt.toLowerCase().includes(query) ||
        review.category.toLowerCase().includes(query)
      );
    }

    setFilteredReviews(result);
    setVisibleCount(6); // Reset pagination on filter change
  }, [selectedCategory, searchQuery, reviews]);

  // Handle Load More
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setIsLoadingMore(false);
    }, 800); // Simulate network delay
  };

  // Handle Hero Button Click (Opens Featured Modal - Usually Roborock)
  const handleOpenFeatured = () => {
    const featuredReview = reviews.find(r => r.isEditorChoice || r.id === '8');
    if (featuredReview) {
      setSelectedReview(featuredReview);
    }
  };

  // Handle Newsletter
  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Navigation Handler
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPage />;
      case 'terms': return <TermsPage />;
      case 'login': return <Auth />;
      case 'home':
      default:
        return (
          <>
            <Hero onOpenFeatured={handleOpenFeatured} />

            {/* Search Section */}
            <section className="bg-[#e6f2f4] dark:bg-[#1f2937] py-16 transition-colors duration-300">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Encontre o produto perfeito para você</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Pesquise milhares de avaliações independentes, guias de compra e comparações de especialistas.
                </p>
                <div className="relative max-w-xl mx-auto">
                  <div className="flex w-full items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-primary/5 p-2 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <Search className="ml-3 text-gray-400 w-5 h-5 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full border-none bg-transparent px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-base"
                      placeholder="O que você quer comprar hoje? (Ex: Fone, Café...)"
                    />
                    <button
                      onClick={() => { }} // Search updates automatically via useEffect
                      className="bg-primary hover:bg-primary-dark text-white rounded-lg px-6 py-2.5 font-bold text-sm transition-colors hidden sm:block"
                    >
                      Buscar
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                    <span>Popular:</span>
                    <button onClick={() => { setSearchQuery('fritadeira'); }} className="hover:text-primary underline decoration-dotted">Fritadeiras</button>
                    <button onClick={() => { setSearchQuery('cadeira'); }} className="hover:text-primary underline decoration-dotted">Cadeiras</button>
                    <button onClick={() => { setSearchQuery('robô'); }} className="hover:text-primary underline decoration-dotted">Robôs</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Grid Section */}
            <section className="py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FilterBar
                  categories={CATEGORIES}
                  selectedCategory={selectedCategory}
                  onSelect={setSelectedCategory}
                />

                {filteredReviews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-in fade-in duration-500">
                    {filteredReviews.slice(0, visibleCount).map((review) => (
                      <ReviewCard
                        key={review.id}
                        review={review}
                        onClick={() => setSelectedReview(review)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nenhum resultado encontrado</h3>
                    <p className="text-gray-500">Tente buscar por outro termo ou mude a categoria.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
                      className="mt-4 text-primary font-bold hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </div>
                )}

                {visibleCount < filteredReviews.length && (
                  <div className="mt-16 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="flex items-center gap-2 px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                      {isLoadingMore ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                      {isLoadingMore ? 'Carregando...' : 'Carregar Mais Avaliações'}
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-primary/5 border-y border-primary/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Compre com Mais Inteligência</h3>
                    <p className="text-gray-600 dark:text-gray-400">Junte-se a mais de 50.000 inscritos e receba nossas melhores escolhas na sua caixa de entrada semanalmente.</p>
                  </div>
                  <div className="flex w-full md:w-auto max-w-md gap-2 flex-col sm:flex-row">
                    {subscribed ? (
                      <div className="w-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-2 rounded-lg text-center font-bold border border-green-200 dark:border-green-800 flex items-center justify-center animate-in fade-in slide-in-from-bottom-2">
                        🎉 Obrigado por se inscrever!
                      </div>
                    ) : (
                      <>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Digite seu e-mail"
                          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none dark:text-white"
                        />
                        <button
                          onClick={handleSubscribe}
                          className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-primary/20"
                        >
                          Inscrever-se
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 font-sans">
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onSelectCategory={(cat) => { setSelectedCategory(cat); if (currentView !== 'home') handleNavigate('home'); }}
        onNavigate={handleNavigate}
        user={user}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Detail Modal */}
      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </div>
  );
};

export default App;