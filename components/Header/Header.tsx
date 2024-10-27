// import { Input } from "@/components/ui/input"
import { MessageCircle, Heart, Bell, CircleUserRound } from "lucide-react";
import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ●
        </Link>{" "}
        <div className="flex border rounded-full p-2 mb-4 lg:mb-0 space-x-10 px-10 text-gray-500">
          <text>What</text>
          <text className="font-thin text-gray-300">|</text>
          <text>Where</text>
          <text className="font-thin text-gray-300">|</text>
          <text>When</text>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Heart className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <CircleUserRound className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
