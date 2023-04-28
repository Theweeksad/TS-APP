import { BaseModel } from '../base.model';
import { Category } from '../categories/category.moel'

export type Sizes = 'S' | 'M' | 'L' | 'xl';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}



