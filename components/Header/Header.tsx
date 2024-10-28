import { Input } from "@/components/ui/input"
import { Heart, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/public/assets/image-white-bg.png"
import Image from "next/image"
import Message from "@/public/assets/message.png"
import User from "@/public/assets/user.png"

export default function Header() {
  return (
    <header className="mb-5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile version */}
        <div className="lg:hidden px-8">
                <div className="relative">
                    <div className="relative">
                    <Input
                        type="search"
                        placeholder="Search on"
                        className="pl-10 pr-12 py-2 w-full rounded-md border border-gray-300 placeholder-gray-400"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Image 
                        src={Logo} 
                        alt={""}
                        height={20}
                        width={20}
                        />
                    </div>
                    </div>
                </div>
        </div>


        {/* Desktop version */}
        <div className="hidden lg:flex items-center justify-between">
          <Image src={Logo} alt="Logo" className="h-12 w-14" />
          <div className="flex border rounded-full p-2 space-x-10 px-10 text-gray-500">
            <span>What</span>
            <span className="font-thin text-gray-300">|</span>
            <span>Where</span>
            <span className="font-thin text-gray-300">|</span>
            <span>When</span>
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
          </div>
        </div>
      </div>
    </header>
  )
}