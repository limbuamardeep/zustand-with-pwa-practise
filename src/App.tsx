
import { NavLink, Route, Routes } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import { useThemeStore } from "./store/themeStore";
import { CartPage } from "./pages/CartPage";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUsPage";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggle = useThemeStore((state) => state.toggleTheme);
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "rounded px-3 py-1 text-sm font-medium",
      isActive
        ? darkMode
          ? "bg-neutral-800 text-neutral-100"
          : "bg-neutral-100 text-black"
        : "hover:underline",
    ].join(" ");
  return (
    <div
      className={`flex min-h-screen flex-col ${
        darkMode ? "bg-black text-neutral-100" : "bg-white text-black"
      }`}
    >
      <nav
        className={`w-full border-b ${
          darkMode ? "border-neutral-800" : "border-neutral-200"
        }`}
      >
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold">Zustand Store</div>
          <div className="flex items-center gap-3">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
            <NavLink to="/about-us" className={navLinkClass}>About us</NavLink>
            <button
              onClick={toggle}
              className="rounded border px-2 py-1 hover:cursor-pointer"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <Lightbulb />
            </button>
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-4xl flex-1 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
