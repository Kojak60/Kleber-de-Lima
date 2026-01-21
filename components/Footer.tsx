import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-surface-dark pt-16 pb-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-gray-900 dark:text-white">ReviewHub</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 pr-4">
              Nós compramos nossos próprios produtos e os testamos em casas reais para oferecer avaliações honestas e independentes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Início</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors text-left">Sobre Nós</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors text-left">Contato</button></li>
              <li><button onClick={() => onNavigate('login')} className="hover:text-primary transition-colors text-left">Login / Cadastro</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors text-left">Nosso Processo de Teste</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors text-left">Diretrizes Editoriais</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors text-left">Carreiras</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors text-left">Parcerias</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors text-left">Política de Privacidade</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors text-left">Termos de Serviço</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors text-left">Divulgação de Afiliados</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2024 ReviewHub Inc. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-400 text-center md:text-right max-w-lg">
            O ReviewHub participa de vários programas de marketing de afiliados, o que significa que podemos receber comissões pagas sobre produtos escolhidos editorialmente e comprados através de nossos links para sites de varejistas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;