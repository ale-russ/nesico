// import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="w-full py-12 md:py-16 bg-primary text-primary-foreground flex flex-col items-center">
//       <div className="w-full px-6 sm:px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
//         <div className="flex flex-col">
//           <h3 className="font-semibold mb-3">Personal</h3>
//           <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               <Link to="/personal/medical">Medical Insurance</Link>
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Elite Plan
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Travel Insurance
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col">
//           <h3 className="font-semibold mb-3">Business</h3>
//           <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Medical Insurance
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Elite Plan
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Travel Insurance
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col">
//           <h3 className="font-semibold mb-3">About Us</h3>
//           <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Medical Insurance
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Elite Plan
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Travel Insurance
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col">
//           <h3 className="font-semibold mb-3">Help</h3>
//           <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Medical Insurance
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Elite Plan
//             </li>
//             <li className="cursor-pointer hover:text-accent transition-colors">
//               Travel Insurance
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="w-full h-px mt-8 bg-primary-foreground/20" />

//       <div className="w-full px-6 sm:px-8 md:px-16 lg:px-48 flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
//         <p className="text-xs text-primary-foreground/80">
//           © New Sudan Insurance Company
//         </p>
//         <div className="flex items-center gap-4">
//           <Facebook className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
//           <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
//           <Twitter className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
//           <Linkedin className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-16 bg-primary text-primary-foreground flex flex-col items-center">
      <div className="w-full px-6 sm:px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Personal</h3>
          <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
            <li>
              <Link
                to="/personal/medical"
                className="hover:text-accent transition-colors"
              >
                Medical Insurance
              </Link>
            </li>
            <li>
              <Link
                to="/personal/elite"
                className="hover:text-accent transition-colors"
              >
                Elite Plan
              </Link>
            </li>
            <li>
              <Link
                to="/personal/travel"
                className="hover:text-accent transition-colors"
              >
                Travel Insurance
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Business</h3>
          <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
            <li>
              <Link
                to="/business/medical"
                className="hover:text-accent transition-colors"
              >
                Medical Insurance
              </Link>
            </li>
            <li>
              <Link
                to="/business/elite"
                className="hover:text-accent transition-colors"
              >
                Elite Plan
              </Link>
            </li>
            <li>
              <Link
                to="/business/travel"
                className="hover:text-accent transition-colors"
              >
                Travel Insurance
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
            <li>
              <Link
                to="/about-us"
                className="hover:text-accent transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-accent transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="text-xs text-primary-foreground/90 pl-4 space-y-2">
            <li>
              <Link
                to="/help/faq"
                className="hover:text-accent transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/help/claims"
                className="hover:text-accent transition-colors"
              >
                Claims Process
              </Link>
            </li>
            <li>
              <Link
                to="/help/support"
                className="hover:text-accent transition-colors"
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px mt-8 bg-primary-foreground/20" />

      <div className="w-full px-6 sm:px-8 md:px-16 lg:px-48 flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <p className="text-xs text-primary-foreground/80">
          © New Sudan Insurance Company
        </p>
        <div className="flex items-center gap-4">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          <Linkedin className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
