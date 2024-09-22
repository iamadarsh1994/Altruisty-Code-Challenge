
const Footer = () => {
    return (
      <footer className="bg-black py-4 text-white">
        <div className="container mx-auto p-4">
          <div className="flex justify-center gap-4 items-center">
            <div className="text-lg font-bold">Exclusive <div>Subscribe: Get 10% off your first order</div> </div>
            <ul className="flex justify-between items-center">
              <li><a href="#" className="text-gray-200 hover:text-yellow-500">Support</a><div>Address</div></li>
              <li><a href="#" className="text-gray-100 hover:text-yellow-500">Account</a> <div>My Account</div> <div>Login / Register</div> </li>

              <li><a href="#" className="text-gray-200 hover:text-yellow-500">Quick Link</a> <div>Privacy Policy</div>
              <div>Terms of Use</div><div>FAQs</div> </li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-500">Download App</a></li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">&copy; 2024 Exclusive</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;