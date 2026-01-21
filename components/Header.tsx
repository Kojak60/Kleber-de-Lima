import React from 'react';
import { Menu, Search, ShoppingBag, Sun, Moon, LogOut, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { CATEGORIES } from '../data';
import { Category } from '../types';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onSelectCategory: (category: Category) => void;
  onNavigate: (view: string) => void;
  user: any;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, onSelectCategory, onNavigate, user }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onNavigate('home');
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section - Resets to 'Todos' */}
          <button
            onClick={() => { onNavigate('home'); onSelectCategory('Todos'); }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center size-9 rounded-lg bg-primary text-white shadow-lg shadow-primary/30">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ReviewHub
            </span>
          </button>

          {/* Desktop Navigation - Dynamic Categories */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => onNavigate('about')} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => onNavigate('contact')} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex flex-col items-end mr-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Olá,</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[150px]">{user.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-bold h-10 px-4 rounded-lg transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Sair</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="hidden sm:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-6 rounded-lg transition-all shadow-md shadow-primary/20 items-center justify-center"
              >
                Entrar
              </button>
            )}
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;