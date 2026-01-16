
export type Category = 'Ice Cream' | 'Juice';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
