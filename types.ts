export interface Author {
  name: string;
  avatar: string;
}

export interface ReviewItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date?: string;
  readTime?: string;
  rating?: number;
  price?: string;
  isEditorChoice?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  author?: Author;
  // New detailed fields
  fullDescription?: string;
  specs?: Record<string, string>;
  pros?: string[];
  cons?: string[];
}

export type Category = 'Todos' | 'Cozinha' | 'Tech' | 'Home Office' | 'Viagem' | 'Ar Livre' | 'Beleza';