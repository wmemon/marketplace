// import { Input } from "@/components/ui/input"
import { Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/image-white-bg.png";
import Image from "next/image";
// import HeaderIcons from "@/public/assets/Header-icons.png";
import Message from "@/public/assets/message.png";
import User from "@/public/assets/user.png";

export default function Header() {
  return (
    <header className="mb-5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] border-b">
      <div className="pl-14 container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between">
        {/* <Link href="/" className=" text-2xl font-bold text-blue-600">
          ● 
        </Link>{" "} */}
        <Image src={Logo} alt="Logo" className="h-12 w-14" />
        <div className="flex border rounded-full p-2 mb-4 lg:mb-0 space-x-10 px-10 text-gray-500">
          <text>What</text>
          <text className="font-thin text-gray-300">|</text>
          <text>Where</text>
          <text className="font-thin text-gray-300">|</text>
          <text>When</text>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <Image src={Message} alt="Message"/>
          </Button>
          <Button size="icon" variant="ghost">
            <Heart className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-2.5 h-2 w-2 bg-violet-500 rounded-full"></span>
          </Button>
          <Button size="icon" variant="ghost">
            <Image className="w-28" src={User} alt="User"/>
          </Button>
          {/* <Image src={HeaderIcons} alt="HeaderIcons" className="h-10 w-56"/> */}
        </div>
      </div>
    </header>
  );
}
