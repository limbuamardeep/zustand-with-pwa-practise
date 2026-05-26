import type { Product } from './Products'
import { useCartStore } from './store/cartStore'

type ProductListProps = {
  products: Product[]
}

export const ProductList = ({ products}: ProductListProps) => {
    const {addToCart}=useCartStore()
  return (
    <div className='flex flex-col gap-2'>
      {products.map((product) => (
        <div key={product.id} >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button type="button" onClick={() => {addToCart(product)}} className='border px-2'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
