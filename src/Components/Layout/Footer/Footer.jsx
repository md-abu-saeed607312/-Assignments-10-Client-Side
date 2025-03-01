// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
//         <aside>
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             fillRule="evenodd"
//             clipRule="evenodd"
//             // eslint-disable-next-line react/no-unknown-property
//             class="fill-current"
//           >
//             <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//           </svg>
//           <p>
//             ACME Industries Ltd.
//             <br />
//             Providing reliable tech since 1992
//           </p>
//         </aside>
//         <nav>
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Cookie policy</a>
//         </nav>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side - Logo & Description */}
        <div className="md:w-1/4 md:mt-14">
          <Link to="/" className="btn-ghost font-bold text-5xl">
            SportsZone
          </Link>
          <p className="text-gray-400 mt-3.5 text-sm">
            A new way to make payments easy,<br /> reliable, and secure.
          </p>
        </div>

        {/* Center - Useful Links */}
        <div className="md:w-1/2 grid grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/content" className="hover:text-blue-400">
                  Content
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-400">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-blue-400">
                  Create
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-blue-400">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400">
                  Terms & Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Community</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/help-center" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-blue-400">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/suggestions" className="hover:text-blue-400">
                  Suggestions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/newsletters" className="hover:text-blue-400">
                  Newsletters
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Partner</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/our-partner" className="hover:text-blue-400">
                  Our Partner
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="hover:text-blue-400">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="md:w-1/4 space-y-2">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="flex items-center text-gray-400">
            <MdEmail className="mr-2 text-xl" /> example@email.com
          </p>
          <p className="flex items-center text-gray-400">
            <MdPhone className="mr-2 text-xl" /> +123 456 7890
          </p>
          <p className="flex items-center text-gray-400">
            <MdPhone className="mr-2 text-xl" /> +987 654 3210
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2022 HooBank. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-6">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

//         {/* Left Section - Logo & Description */}
//         <div className="md:w-1/3">
//           <img src="/logo.png" alt="Logo" className="h-12 mb-3" />
//           <p className="text-gray-400 text-sm">
//             A new way to make the payments easy, reliable, and secure.
//           </p>
//         </div>

//         {/* Center Section - Navigation Links */}
//         <div className="md:w-1/2 grid grid-cols-3 gap-6">
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
//             <ul className="space-y-1 text-gray-400">
//               <li><Link to="/content" className="hover:text-blue-400">Content</Link></li>
//               <li><Link to="/how-it-works" className="hover:text-blue-400">How it Works</Link></li>
//               <li><Link to="/create" className="hover:text-blue-400">Create</Link></li>
//               <li><Link to="/explore" className="hover:text-blue-400">Explore</Link></li>
//               <li><Link to="/terms" className="hover:text-blue-400">Terms & Services</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Community</h4>
//             <ul className="space-y-1 text-gray-400">
//               <li><Link to="/help-center" className="hover:text-blue-400">Help Center</Link></li>
//               <li><Link to="/partners" className="hover:text-blue-400">Partners</Link></li>
//               <li><Link to="/suggestions" className="hover:text-blue-400">Suggestions</Link></li>
//               <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
//               <li><Link to="/newsletters" className="hover:text-blue-400">Newsletters</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Partner</h4>
//             <ul className="space-y-1 text-gray-400">
//               <li><Link to="/our-partner" className="hover:text-blue-400">Our Partner</Link></li>
//               <li><Link to="/become-partner" className="hover:text-blue-400">Become a Partner</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Section - Social Media Icons */}
//         <div className="md:w-1/6 flex justify-end space-x-4">
//           <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400">
//             <FaInstagram size={20} />
//           </a>
//           <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
//             <FaFacebookF size={20} />
//           </a>
//           <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
//             <FaTwitter size={20} />
//           </a>
//           <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400">
//             <FaLinkedinIn size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
//         Copyright © 2022 HooBank. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
