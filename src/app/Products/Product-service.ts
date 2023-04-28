import { faker } from '@faker-js/faker';

import { Product } from './Product.model';
import { CreateProductDto, UpdatedProductDto, FindProductDto } from './Product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct
};

export const updateProduct = (id: Product['id'], changes: UpdatedProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color= 'blue';
  // dto.tags?.pop();
  // dto.tags?.push();
  return products;
}
