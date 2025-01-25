import React from 'react';
import { asset } from '../assets/asset.js';

const Footer = () => {
  return (
    <div>
      <footer className="grid md:grid-cols-[2fr_1fr_1fr_1fr] sm:grid-cols-2 px-[5%] py-8">
        {/* 1st div */}
        <div className="flex flex-col justify-start gap-3 items-start">
          <img src={asset.logo} alt="Company Logo" />
          <p className="max-w-[70%] text-sm">
            Onclasses makes it easy to create, sell, market, and scale your online business with your personal brand.
          </p>
          <div className="flex justify-start items-center gap-4 py-2">
            <img src={asset.facefoot} alt="Facebook" />
            <img src={asset.instafooter} alt="Instagram" />
            <img src={asset.linkdin} alt="LinkedIn" />
            <img src={asset.yt} alt="YouTube" />
            <img src={asset.tok} alt="TikTok" />
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="space-y-1">
            <h1 className="font-bold">Company</h1>
            <ul className="text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Resources</h1>
            <ul className="text-sm space-y-1">
              <li>Help Center</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Events</li>
            </ul>
          </div>
        </div>

        {/* 3rd div */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="space-y-1">
            <h1 className="font-bold">Products</h1>
            <ul className="text-sm">
              <li>Online Courses</li>
              <li>Webinars</li>
              <li>eBooks</li>
              <li>Workshops</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Plans</h1>
            <ul className="text-sm space-y-1">
              <li>Free Plan</li>
              <li>Starter Plan</li>
              <li>Pro Plan</li>
              <li>Enterprise Plan</li>
            </ul>
          </div>
        </div>

        {/* 4th div */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="space-y-1">
            <h1 className="font-bold">Legal</h1>
            <ul className="text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Contact</h1>
            <ul className="text-sm space-y-1">
              <li>Email: support@onclasses.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Online Street, Tech City</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
