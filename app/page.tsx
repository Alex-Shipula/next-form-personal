import Image from "next/image";
import LogoGroup from "@/assets/logo-group.png";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="relative bg-[#292929] text-white min-h-screen overflow-hidden">

      <div className="absolute top-1/4 left-8">
        <h1 className="text-7xl font-bold mb-12">Contact Page UIUX</h1>
        <Link href="/contact-page"><p className="text-lg mb-5">Modren UIUX</p></Link>
        <Link href="/contact-page"><p className="text-lg mb-5">Free</p></Link>
        <Link href="/contact-page"><p className="text-lg">Something ...</p></Link>
      </div>

      <div className="absolute top-[30%] right-[7%] h-full w-1/2">
        <Image src={LogoGroup} alt="Avatar" />
      </div>

      <div className="absolute bottom-8 left-8">
        <p className="text-3xl">Nasimi Mamedov</p>
      </div>
    </div>
  );
}
