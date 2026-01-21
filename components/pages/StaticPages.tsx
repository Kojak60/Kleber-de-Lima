import React, { useState } from 'react';
import { Mail, MapPin, Phone, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre o ReviewHub</h1>
    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6 text-lg">
      <p>
        O <strong>ReviewHub</strong> nasceu de uma frustração simples: a dificuldade de encontrar avaliações de produtos honestas, aprofundadas e isentas na internet. Em um mar de conteúdo patrocinado e opiniões superficiais, decidimos criar um porto seguro para consumidores exigentes.
      </p>
      <p>
        Nossa missão é fornecer as informações mais confiáveis e detalhadas para ajudar você a tomar decisões de compra inteligentes. Não apenas lemos as especificações da caixa; nós vivemos com os produtos.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Nosso Processo de Teste</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Aquisição Independente:</strong> Compramos a maioria dos produtos que testamos anonimamente.</li>
        <li><strong>Testes no Mundo Real:</strong> Nossos editores usam os produtos em suas casas, não apenas em laboratórios estéreis.</li>
        <li><strong>Transparência:</strong> Se um produto falha, nós contamos. Se um recurso é inútil, nós avisamos.</li>
      </ul>
    </div>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Política de Privacidade</h1>
    <div className="space-y-6 text-gray-600 dark:text-gray-300">
      <p>Última atualização: 10 de Novembro de 2024</p>
      <p>No ReviewHub, a privacidade dos nossos visitantes é de extrema importância. Este documento de política de privacidade descreve os tipos de informações pessoais que são recebidas e coletadas pelo ReviewHub e como elas são usadas.</p>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Arquivos de Log</h3>
      <p>Como muitos outros sites, o ReviewHub faz uso de arquivos de log. As informações dentro dos arquivos de log incluem endereços de protocolo de internet (IP), tipo de navegador, provedor de serviços de Internet (ISP), carimbo de data/hora, páginas de referência/saída e número de cliques para analisar tendências e administrar o site.</p>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cookies e Web Beacons</h3>
      <p>O ReviewHub usa cookies para armazenar informações sobre as preferências dos visitantes, para registrar informações específicas do usuário sobre quais páginas o visitante acessa ou visita e para personalizar ou customizar o conteúdo da nossa página web com base no tipo de navegador dos visitantes ou outras informações que o visitante envia através do navegador.</p>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Termos de Serviço</h1>
    <div className="space-y-6 text-gray-600 dark:text-gray-300">
      <p><strong>1. Aceitação dos Termos</strong></p>
      <p>Ao acessar e usar o ReviewHub, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.</p>
      
      <p><strong>2. Uso de Conteúdo</strong></p>
      <p>Todo o conteúdo fornecido no ReviewHub é apenas para fins informativos. O proprietário deste blog não faz representações quanto à precisão ou integridade de qualquer informação neste site ou encontrada seguindo qualquer link neste site.</p>
      
      <p><strong>3. Isenção de Responsabilidade</strong></p>
      <p>As opiniões expressas no ReviewHub são de responsabilidade dos autores e não refletem necessariamente a opinião de quaisquer organizações com as quais possam estar afiliados.</p>
      
      <p><strong>4. Links de Afiliados</strong></p>
      <p>O ReviewHub pode conter links para sites afiliados e recebemos uma comissão por qualquer compra feita por você no site afiliado usando tais links.</p>
    </div>
  </div>
);

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mensagem Enviada!</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Obrigado por entrar em contato. Nossa equipe responderá em até 24 horas úteis.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-primary font-bold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Entre em Contato</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Tem alguma dúvida sobre uma avaliação? Quer sugerir um produto para teste? Ou apenas dizer olá? Estamos ouvindo.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-bold">contato@reviewhub.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="font-bold">+55 (11) 9999-9999</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Escritório</p>
                <p className="font-bold">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white">
                <option>Sugestão de Produto</option>
                <option>Dúvida Técnica</option>
                <option>Parceria</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
              <textarea rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Enviar Mensagem
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const LoginPage: React.FC = () => (
  <div className="min-h-[80vh] flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Bem-vindo de volta</h2>
        <p className="text-gray-500">Acesse sua conta para salvar favoritos</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Login simulado com sucesso!"); }}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input type="email" placeholder="seu@email.com" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
            <a href="#" className="text-xs text-primary font-bold hover:underline">Esqueceu a senha?</a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
          </div>
        </div>

        <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20">
          Entrar
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-surface-dark text-gray-500">Ou continue com</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="font-bold text-gray-700 dark:text-gray-300">Google</span>
          </button>
          <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="font-bold text-gray-700 dark:text-gray-300">Facebook</span>
          </button>
        </div>
      </form>
    </div>
  </div>
);