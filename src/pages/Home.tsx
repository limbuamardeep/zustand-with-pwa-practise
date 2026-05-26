import { ProductList } from "../components/ProductList";
import { products } from "../constants/Products";

export function Home() {
  return (
    <section className="w-full px-4">
      <h3 className="mb-4 text-2xl font-semibold">Welcome to the store</h3>
      <ProductList products={products} />
    </section>
  );
}
