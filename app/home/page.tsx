import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mail, Instagram, Twitter, ChevronRight } from 'lucide-react';
import Logo from "@/public/assets/logo.png";
import Category from "@/public/assets/category.png";

const categories = [
  { name: 'Automobiles', icon: '' },
  { name: 'Electronics', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Machines', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Fashion', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Art & Craft', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Real Estate', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Appliances', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Furniture', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Sports', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Musicals', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Emerging', icon: '/placeholder.svg?height=50&width=50' },
  { name: 'Books', icon: '/placeholder.svg?height=50&width=50' },
]

const products = [
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: 'https://r.saregama.com/resources/images//carvaan/carvaan_premium_share-image.jpg' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: 'https://c1.wallpaperflare.com/preview/278/993/113/bike-mountain-bike-wheel-cycling.jpg' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/IMG_20200813_182649_C_0_1200x768.jpeg' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: 'https://i.pinimg.com/736x/7c/bf/f4/7cbff458f32ff460a989670fd0bdcb93.jpg' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: 'https://www.giva.co/cdn/shop/products/ML_queens_necklace_img1.jpg?v=1632552308&width=1445' },
]

export default function MarketplaceLayout() {
  return (
    <div className="min-h-screen bg-white pl-14">

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 overflow-x-auto">
        <Image src={Category} alt='Category'/>
          <div className="flex space-x-4 md:grid md:grid-cols-4 md:gap-4 lg:grid-cols-12">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <span className="text-xs font-semibold text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 pt-14">
          <div className='flex mb-4 align-bottom'>
            <h2 className="text-2xl font-semibold ">Top rated experiences</h2>
            <h2 className='text-md ml-auto mr-20 font-semibold flex'>View All <ChevronRight/>  </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className='flex flex-col'>
              <Card key={index}>
                <CardContent className="p-0 h-80">
                  <div className="relative">
                    <Image src={product.image} alt={product.title} width={200} height={200} className="h-80 rounded-xl w-full object-cover" />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="p-4">
                    <p className="font-semibold text-sm">{product.title}</p>
                    <p className="text-sm text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-thin text-gray-500">per day</span></p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
        <div className='flex mb-4 align-bottom'>
            <h2 className="text-2xl font-semibold ">Top rated experiences</h2>
            <h2 className='text-md ml-auto mr-20 font-semibold flex'>View All <ChevronRight/> </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className='flex flex-col'>
              <Card key={index}>
                <CardContent className="p-0 h-80">
                  <div className="relative">
                    <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-80 rounded-xl object-cover" />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                </CardContent>
              </Card>
              <div className="p-4">
                    <h3 className="font-semibold text-sm">{product.title}</h3>
                    <p className="text-xs text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-normal">per day</span></p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
        <div className='flex mb-4 align-bottom'>
            <h2 className="text-2xl font-semibold ">Top rated experiences</h2>
            <h2 className='text-md ml-auto mr-20 font-semibold flex'>View All <ChevronRight/>  </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
              <div key={index} className='flex flex-col'>
              <Card key={index}>
                <CardContent className="p-0 h-80">
                  <div className="relative">
                    <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-80 rounded-xl object-cover" />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                </CardContent>
              </Card>
              <div className="p-4">
                    <h3 className="font-semibold text-sm">{product.title}</h3>
                    <p className="text-xs text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-normal">per day</span></p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 md:hidden">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Don&apos;t see what you need?</h3>
              <p className="text-sm text-gray-600 mb-4">Request a product & we&apos;ll do our best to get it on Renit for you!</p>
              <Button className="w-full">Unavailability form</Button>
            </CardContent>
          </Card>
        </section>
      </main>

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
  )
}