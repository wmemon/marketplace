import Image from "next/image";
import Post from '../../public/assets/mobile-menubar/post.jpeg'
import { Mail, Instagram, Twitter } from 'lucide-react';

export default function StickyFooter(){
    return (
        <div className="border shadow-2xl h-16 sm:flex hidden px-36 justify-between fixed bottom-0 left-0 w-full bg-white">
        <div className="flex flex-row gap-12 justify-start items-center">
            <div className="text-sm font-bold">Unavailability Form</div>
            <div className="text-sm font-bold">My Products</div>
            <div className="flex flex-row justify-center items-center">
                <Image src={Post} alt={'post icon'} width={30} />
                <div className="text-sm font-bold">Post Product</div>
            </div>
            <div className="text-sm font-bold">
                Legal
            </div>
            <div className="text-sm font-bold">
                Support
            </div>
        </div>
        <div className="flex flex-row gap-4 justify-end items-center">
        <Mail width={20} />
        <Instagram width={20} />
        <Twitter width={20} />
        </div>
        </div>
    )
}