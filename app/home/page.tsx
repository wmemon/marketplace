import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Heart, Bell, User, Mail, Instagram, Twitter } from 'lucide-react'

const categories = [
  { name: 'Automobiles', icon: '/placeholder.svg?height=50&width=50' },
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
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=200&width=200' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=200&width=200' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=200&width=200' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=200&width=200' },
  { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=200&width=200' },
]

export default function MarketplaceLayout() {
  return (
    <div className="min-h-screen bg-white ml-14">

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={category.icon} alt={category.name} width={50} height={50} className="mb-2" />
                <span className="text-xs text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Top rated experiences</h2>
            <Link href="/" className="text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-normal">per day</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Top picks to explore</h2>
            <Link href="/" className="text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-normal">per day</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Popular in your area</h2>
            <Link href="/" className="text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.location}</p>
                    <p className="text-sm font-bold mt-2">{product.price} <span className="font-normal">per day</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t -ml-14 pl-14">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
                <span className="text-3xl mr-1">●</span> Renil
              </Link>
              <p className="text-sm text-gray-600 mt-2">The marketplace where you can rent the best stuff.</p>
              <p className="text-sm text-gray-600 mt-4">© 2024 Renil. All rights reserved.</p>
            </div>
            <div className="flex space-x-12">
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