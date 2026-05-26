
import { Cart } from './Cart'
import { ProductList } from './ProductList'
import { products } from './Products'
import { useThemeStore } from './store/themeStore'
import "./index.css"

function App() {
  
  const darkMode = useThemeStore((state) => state.darkMode)
  const toggle = useThemeStore((state) => state.toggleTheme)
  return (
    <div
      className={`flex min-h-screen flex-col items-center ${
        darkMode ? 'bg-black text-neutral-100' : 'bg-white text-black'
      }`}
    >
      Mode:{darkMode ? 'dark' : 'light'}
      <button onClick={toggle} className='border px-2 rounded hover:cursor-pointer'>Toggle</button>
      <h3>Welcome to the store</h3>
      <ProductList products={products}/>
      <Cart/>
    </div>
  )
}

export default App
