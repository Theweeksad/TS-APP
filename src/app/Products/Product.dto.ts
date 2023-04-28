import { Product } from './Product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>

export interface UpdatedProductDto extends Partial<CreateProductDto> {};

type example2 = Required<Product>

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>
