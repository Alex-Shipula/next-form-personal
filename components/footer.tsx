import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold mb-4 text-center pb-4">Logo Here</h1>
        <div className="border-b border-color-[#FFFFFF] mb-8 w-full"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">Reach us</h3>
            <div className="flex flex-col justify-start space-y-6 text-sm">
              <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4">
                <Phone className="h-5 w-5" />
                <span>+012 3456 789</span>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4">
                <Mail className="h-5 w-5" />
                <span>demo@gmail.com</span>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4">
                <MapPin className="h-9 w-9" />
                <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Services</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Techlabz Keybox</Link></li>
              <li><Link href="/terms">Downloads</Link></li>
              <li><Link href="/terms">Forum</Link></li>
            </ul>
          </div>

          <div>
            <div className="bg-[#131313] w-[304px] h-[184px] rounded-[10px] p-4 md:ml-[-82px] text-center">
              <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-[#1E1E1E] border-none text-white w-full"
                  />
                  <Button className="bg-[#000000] text-gray-400">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-400 pt-4">* Will send you weekly updates for your better tool management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}