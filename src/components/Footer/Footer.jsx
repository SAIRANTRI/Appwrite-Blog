import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../LogoIcon";
import Container from "../container/Container";

function Footer() {
  return (
    <footer className="py-10 bg-primary text-white border-t border-white">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 flex items-center">
            <LogoIcon width="50px" />
            <p className="ml-4 text-sm">&copy; 2024. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap space-x-6">
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-accent">Features</Link></li>
                <li><Link to="/" className="hover:text-accent">Pricing</Link></li>
                <li><Link to="/" className="hover:text-accent">Affiliate Program</Link></li>
                <li><Link to="/" className="hover:text-accent">Press Kit</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-accent">Account</Link></li>
                <li><Link to="/" className="hover:text-accent">Help</Link></li>
                <li><Link to="/" className="hover:text-accent">Contact Us</Link></li>
                <li><Link to="/" className="hover:text-accent">Customer Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legals</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-accent">Terms & Conditions</Link></li>
                <li><Link to="/" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-accent">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      </footer>
  );
}

export default Footer;
