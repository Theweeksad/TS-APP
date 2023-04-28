type Sizes = 'S' | 'M' | 'L' | 'xl';
type userId = string | number;


interface Product {
  id: string | number;
  title: string;
  createStock: Date;
  stock: number;
  sizes?: Sizes;
}
const products: Product[] = [];

products.push({
  id: '1',
  title: 'pq',
  createStock: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
}
