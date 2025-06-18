import React from "react";
import { Globe } from "lucide-react";
function Footer() {
  return (
    <footer className="mt-20 text-gray-600 bg-white border-t">
      <div className="px-6 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Become a Member</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">Product Advice</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Get Help</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About Nike</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Franchise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Air Force 1</a>
              </li>
              <li>
                <a href="#">Air Jordan 1</a>
              </li>
              <li>
                <a href="#">Pegasus</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col gap-4 justify-between items-center mt-12 text-xs text-gray-500 sm:flex-row">
          <div className="flex gap-1 items-center">
            <Globe className="w-4 h-4" />
            <span>Australia</span>
          </div>
          <div className="flex flex-wrap gap-4 text-center sm:text-left">
            <span>© 2025 Nike, Inc. All rights reserved</span>
            <a href="#">Terms of Use</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Privacy & Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
