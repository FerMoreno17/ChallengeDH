export class Producto {
  createdAt?: string;
  product?: string;
  points?: number;
  image?: string;
  is_redemption?: boolean;
  id?: number;

  public constructor(init?: Partial<Producto>) {
    Object.assign(this, init);
  }
}
