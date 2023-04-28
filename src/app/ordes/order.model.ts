import { BaseModel } from "../base.model";
import { Product  } from "../Products/Product.model";
import { User } from "../users/user.model";

export interface order extends BaseModel {
  products: Product[]
  user: User;
}
