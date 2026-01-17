export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ShopElite</h3>
              <p className="text-sm">Premium products for a premium lifestyle. Curated with care, delivered with speed.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Featured</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} ShopElite. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
