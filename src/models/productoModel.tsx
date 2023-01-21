export class Producto {
  createdAt?: Date;
  product?: string;
  points?: number;
  image?: string;
  is_redemtion?: boolean;
  id?: number;

  public constructor(init?: Partial<Producto>) {
    Object.assign(this, init);
  }
}
