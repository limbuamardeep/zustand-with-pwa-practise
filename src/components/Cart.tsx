import { useCartStore } from "../store/cartStore";

export const Cart =() => {
  
  const {removeFromCart,reset, cart}=useCartStore();
  return (
    <div className="mt-3 flex flex-col gap-2">
      <h1 className="font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {cart.map((product) => (
            <div key={product.id} className="flex flex-col gap-3 w-fit">
              <div>
                <span>{product.name}</span>
                <span>{product.description}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(product.id)} className="border px-2 w-fit">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center">
        {cart.length > 0 && (
          <button onClick={() => reset()} className="border px-2">Clear Cart</button>
        )}
      </div>
    </div>
  );
};
