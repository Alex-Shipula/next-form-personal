"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AvatarIcon from "@/assets/avatar-menu.png";
import BagIcon from "@/assets/bag-icon.png";
import AvatarIconLight from "@/assets/avatar-menu-light.png";
import BagIconLight from "@/assets/bag-icon-light.png";
import MenuIcon from "@/assets/menu-icon.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact-page", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Logo Here
            </Link>
          </div>

          <div className="flex items-center space-x-20">
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-none">
                <Image src={AvatarIcon} alt="Avatar" width={32} height={32} />
              </Button>

              <Button variant="outline" size="icon" className="rounded-full border-none">
                <Image src={BagIcon} alt="Avatar" width={32} height={32} />
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Button variant="outline" size="icon" className="rounded-full border-none h-6 w-6">
                  <Image src={MenuIcon} alt="Avatar" width={18} height={12} />
                </Button>
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center pb-7 pt-7">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-none bg-gray-1000 hover:bg-gray-600">
                <Image src={AvatarIconLight} alt="Avatar" width={32} height={32} />
              </Button>

              <Button variant="outline" size="icon" className="rounded-full border-none bg-gray-1000 hover:bg-gray-600">
                <Image src={BagIconLight} alt="Avatar" width={32} height={32} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}