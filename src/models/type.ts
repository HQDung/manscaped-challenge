export interface Product {
  id: string;
  name: string;
  qty: number;
  price: number;
  img?: string;
}

export interface Shipping {
  name: string;
  address: string;
  city: string;
  country: string;
}
export interface Order {
  id: string;
  created: string;
  updated: string;
  items: Product[];
  total: number;
  shipping: Shipping;
  tags: string[];
}
