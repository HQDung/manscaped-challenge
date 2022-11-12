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
export interface OrderInfo {
  id: string;
  created: string;
  updated: string;
  total: number;
  tags: string[];
}
