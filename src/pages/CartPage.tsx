import { Cart } from "../components/Cart";

export function CartPage() {
  return (
    <section className="w-full px-4">
      <h3 className="mb-4 text-2xl font-semibold">Your cart</h3>
      <Cart />
    </section>
  );
}
