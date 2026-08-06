export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  year: number;
  ram: string;
  warranty: number;
  description_short: string;
  description_full: string;
  features: string[];
  image: string;
  stock: number;
}
