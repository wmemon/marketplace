import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/public/assets/logo.png";
import Home from '@/public/assets/mobile-menubar/home.jpeg';
import Account from '@/public/assets/mobile-menubar/account.jpeg';
import Heart from '@/public/assets/mobile-menubar/heart.jpeg';
import Message from '@/public/assets/mobile-menubar/message.jpeg';
import Post from '@/public/assets/mobile-menubar/post.jpeg';
import { Mail, Instagram, Twitter } from 'lucide-react';
export default function Footer(){
    return (
        // Mobile version
        <>
       <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2">
                <Link href="/" className="flex flex-col items-center w-16">
                    <div className="h-6 flex items-center justify-center">
                    <Image src={Home} className="w-7 h-6" alt="Home icon" />
                    </div>
                    <span className="text-xs mt-1">Home</span>
                </Link>
                
                <Link href="/" className="flex flex-col items-center w-16">
                    <div className="h-6 flex items-center justify-center">
                    <Image src={Heart} className="w-10 h-6" alt="Heart icon" />
                    </div>
                    <span className="text-xs mt-1 text-slate-500">Saved</span>
                </Link>
                
                <Link href="/" className="flex flex-col items-center w-16">
                    <div className="h-6 flex items-center justify-center">
                    <Image src={Post} className="w-9 h-7" alt="Post icon" />
                    </div>
                    <span className="text-xs mt-1 text-slate-500">Post</span>
                </Link>
                
                <Link href="/" className="flex flex-col items-center w-16">
                    <div className="h-6 flex items-center justify-center">
                    <Image src={Message} className="w-7 h-7" alt="Message icon" />
                    </div>
                    <span className="text-xs mt-1 text-slate-500">Chat</span>
                </Link>
                
                <Link href="/" className="flex flex-col items-center w-16">
                    <div className="h-6 flex items-center justify-center">
                    <Image src={Account} className="w-5 h-6" alt="Account icon" />
                    </div>
                    <span className="text-xs mt-1 text-slate-500">Profile</span>
                </Link>
</nav>
        <div className='sm:pl-14 px-7 hidden sm:block'>
        <footer className="bg-gray-100 border-t -ml-14 pl-14 py-8">
        <div className="container px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-4 md:mb-0 -mt-2">
              <Link href="/" className="text-2xl text-black font-thin flex items-center">
              <Image src={Logo} alt='Logo' className='h-12 w-14 -ml-3'/>
                Renit
              </Link>
              <p className="text-sm text-gray-600 mt-2">The marketplace where you <br/> can rent the best stuff.</p>
              <p className="text-sm font-thin text-gray-400 mt-4">© 2024 Renit. All rights reserved.</p>
            </div>
            <div className="flex space-x-12 mr-80">
              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">₹ INR</Link></li>
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Socials</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900 flex items-center"><Mail className="w-4 h-4 mr-2" /> Email</Link></li>
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900 flex items-center"><Instagram className="w-4 h-4 mr-2" /> Instagram</Link></li>
                  <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900 flex items-center"><Twitter className="w-4 h-4 mr-2" /> X</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
      </>
    );
}