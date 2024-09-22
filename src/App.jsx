import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import SimpleRegistrationForm from './components/SimpleRegistrationForm';
import Signin from './components/Signin';
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Account from "./components/Account";
import CheckoutForm from "./pages/CheckoutForm";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navbar />
        </div>
  
        <div className="flex-1">
          <Routes>
            <Route path="/signup" element={<SimpleRegistrationForm />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
