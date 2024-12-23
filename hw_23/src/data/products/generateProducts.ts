import { IProduct, MANUFACTURERS } from "../types/products.types";

export function generateProductData(customData?: Partial<IProduct>): IProduct {
  return {
    name: "playstation" + Date.now(),
    manufacturer: MANUFACTURERS.SONY,
    amount: 1,
    price: 2000,
    notes: "dear santa...",
    ...customData,
  };
}