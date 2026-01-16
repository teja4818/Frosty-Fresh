
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'ic-1',
    name: 'Madagascar Vanilla',
    category: 'Ice Cream',
    price: 6.50,
    description: 'Real vanilla bean specks with a rich, velvety texture.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop',
    tags: ['Classic', 'Bestseller'],
    color: 'bg-amber-50'
  },
  {
    id: 'ic-2',
    name: 'Midnight Dark Chocolate',
    category: 'Ice Cream',
    price: 7.50,
    description: '70% dark cocoa blend for the ultimate chocolate lover.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop',
    tags: ['Rich', 'Intense'],
    color: 'bg-stone-100'
  },
  {
    id: 'ic-3',
    name: 'Wild Pistachio',
    category: 'Ice Cream',
    price: 8.00,
    description: 'Roasted Persian pistachios folded into creamy goodness.',
    image: 'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=800&auto=format&fit=crop',
    tags: ['Nutty', 'Premium'],
    color: 'bg-emerald-50'
  },
  {
    id: 'j-1',
    name: 'Tropical Sunrise',
    category: 'Juice',
    price: 5.50,
    description: 'Mango, orange, and passion fruit cold-pressed daily.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop',
    tags: ['Refreshing', 'Vitamin C'],
    color: 'bg-orange-50'
  },
  {
    id: 'j-2',
    name: 'Green Revive',
    category: 'Juice',
    price: 6.00,
    description: 'Kale, cucumber, apple, and a splash of organic lemon.',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800&auto=format&fit=crop',
    tags: ['Detox', 'Healthy'],
    color: 'bg-green-50'
  },
  {
    id: 'j-3',
    name: 'Beetroot Blast',
    category: 'Juice',
    price: 5.75,
    description: 'Organic beets, ginger, and carrot for a natural energy kick.',
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop',
    tags: ['Earthy', 'Antioxidant'],
    color: 'bg-pink-50'
  },
];
