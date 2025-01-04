import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3E937F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">LOGO</h2>
            <p className="text-white">+918237382829</p>
            <p className="text-white">Logo@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact-us" className="text-white hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-white hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="text-white hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/guest-refund-policy" className="text-white hover:text-white">
                  Guest Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="text-white hover:text-white">
                  Booking Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media or Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Button  size="icon">
                <Link href="https://facebook.com">
                  {/* Replace with your social media icon */}
                  <span className="">FB</span>
                </Link>
              </Button>
              <Button  size="icon">
                <Link href="https://twitter.com">
                  {/* Replace with your social media icon */}
                  <span className="">TW</span>
                </Link>
              </Button>
              <Button  size="icon">
                <Link href="https://instagram.com">
                  {/* Replace with your social media icon */}
                  <span className="">IG</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white">
            © 2024 LOGO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;