const num1: number = 42;
const str: string = 'Hello, TypeScript!';
const isCompleate: boolean = true;
const numbers: number[] = [1,2,3,4,5];
const cities: string[] = ['Minsk', 'Warsaw', 'London'];
const person: {name: string; age: number; city: string } = {
    name: 'Alice',
    age: 30,
    city: 'Minsk'
};

type User = {
    name: string;
    age: number;
    email?: string
}

type Grade = 'junior' | 'middle' | 'senior';

interface ICar {
    brand: string;
    model: string;
    year?: number;
}

interface IAddress {
    street: string;
    zipCode: number;
}
interface IFullAddress extends IAddress {
    country: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
};

type DiscountedProduct = Product & {
    discount: number;
};

const product: DiscountedProduct = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    discount: 10
  };

  function calculateDiscount (product: DiscountedProduct) : number {
    return product.price - (product.price/100*product.discount)
  }
console.log(calculateDiscount(product))