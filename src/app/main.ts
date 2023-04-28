import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './Products/Product-service'

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'xl' ]),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid()
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80
});

findProducts({
  stock: 10,
  color: 'blue',
  createAt: new Date(),
  isNew: true,
  tags: ['as', 'as']
});
