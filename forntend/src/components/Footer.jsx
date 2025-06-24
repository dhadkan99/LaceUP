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
                <button className="hover:underline">Find a Store</button>
              </li>
              <li>
                <button className="hover:underline">Become a Member</button>
              </li>
              <li>
                <button className="hover:underline">Feedback</button>
              </li>
              <li>
                <button className="hover:underline">Product Advice</button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:underline">Get Help</button>
              </li>
              <li>
                <button className="hover:underline">Order Status</button>
              </li>
              <li>
                <button className="hover:underline">
                  Shipping and Delivery
                </button>
              </li>
              <li>
                <button className="hover:underline">Returns</button>
              </li>
              <li>
                <button className="hover:underline">Payment Options</button>
              </li>
              <li>
                <button className="hover:underline">Contact Us</button>
              </li>
              <li>
                <button className="hover:underline">Reviews</button>
              </li>
              <li>
                <button className="hover:underline">Terms & Conditions</button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:underline">About Nike</button>
              </li>
              <li>
                <button className="hover:underline">News</button>
              </li>
              <li>
                <button className="hover:underline">Careers</button>
              </li>
              <li>
                <button className="hover:underline">Investors</button>
              </li>
              <li>
                <button className="hover:underline">Sustainability</button>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Franchise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:underline">Air Force 1</button>
              </li>
              <li>
                <button className="hover:underline">Air Jordan 1</button>
              </li>
              <li>
                <button className="hover:underline">Pegasus</button>
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
            <button className="hover:underline">Terms of Use</button>
            <button className="hover:underline">Terms of Sale</button>
            <button className="hover:underline">Privacy & Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
