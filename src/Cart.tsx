import { useCartStore } from "./store/cartStore";

export const Cart =() => {
  
  const {removeFromCart,reset, cart}=useCartStore();
  return (
    <div className="mt-3 flex flex-colfi gap-2">
      <h1 className="font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div>
                <span>{product.name}</span>
                <span>{product.description}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(product.id)} className="border px-2">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center items-center">
        {cart.length > 0 && (
          <button onClick={() => reset()} className="border px-2">Clear Cart</button>
        )}
      </div>
    </div>
  );
};
