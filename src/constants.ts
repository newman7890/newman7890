export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  tag?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'cement',
    name: 'Blocks & Cement',
    image: '/src/assets/images/blocks_sandcrete_stack_1779198398636.png',
    itemCount: 42
  },
  {
    id: 'steel',
    name: 'Structural Steel',
    image: '/src/assets/images/cat_steel_1779113281438.png',
    itemCount: 124
  },
  {
    id: 'timber',
    name: 'Timber & Boards',
    image: '/src/assets/images/cat_timber_1779113298709.png',
    itemCount: 86
  },
  {
    id: 'finishing',
    name: 'Finishing & Tiles',
    image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=800',
    itemCount: 215
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ghacem Super Rapid Cement (50kg)',
    price: 95,
    category: 'Cement',
    image: '/src/assets/images/cement_bags_pallet_1779198422043.png',
    tag: 'Best Seller'
  },
  {
    id: 'b1',
    name: '9-Inch Sandcrete Hollow Blocks',
    price: 12,
    category: 'Cement',
    image: '/src/assets/images/blocks_sandcrete_stack_1779198398636.png',
    tag: 'Premium Quality'
  },
  {
    id: 'b2',
    name: '6-Inch Sandcrete Hollow Blocks',
    price: 10,
    category: 'Cement',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Y12 High-Tensile Rebar',
    price: 110,
    category: 'Steel',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular'
  }
];
