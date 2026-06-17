import { Button } from '@zustand/ui/button'
import type { Product } from '../constants/Products'
import { useCartStore } from '../store/cartStore'

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
          <Button variant='primary' onClick={() => {addToCart(product)}} >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  )
}
