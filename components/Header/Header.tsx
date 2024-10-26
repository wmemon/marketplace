import { Input } from "@/components/ui/input"
import { MessageCircle, Heart, Bell, CircleUserRound } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Header(){
    return(
        <header className="border-b">
<div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between">
  <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-full mb-4 lg:mb-0" />
  <div className="flex space-x-2 border rounded-full p-2 mb-4 lg:mb-0">
    <Input className="border-0 bg-transparent" placeholder="What" />
    <div className="w-px bg-border" />
    <Input className="border-0 bg-transparent" placeholder="Where" />
    <div className="w-px bg-border" />
    <Input className="border-0 bg-transparent" placeholder="When" />
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
    )
}

