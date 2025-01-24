export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'armor' | 'weapons' | 'artifacts' | 'sharpening';
  discordUsername?: string;
  sharpening?: number;
}