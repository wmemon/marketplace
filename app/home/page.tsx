import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ChevronRight } from 'lucide-react'

export default function MarketplaceLayout() {
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
  ]

  const topRatedExperiences = [
    { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Hero Xpulse 200T', location: 'Goregaon, Mumbai', price: '₹1990', image: '/placeholder.svg?height=300&width=400' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={category.icon} alt={category.name} width={50} height={50} className="mb-2" />
                <span className="text-sm text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Top rated experiences</h2>
            <Link href="#" className="text-primary flex items-center">
              View all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topRatedExperiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image 
                      src={experience.image} 
                      alt={experience.title} 
                      width={400} 
                      height={300} 
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2 text-white hover:text-primary">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                    <p className="font-semibold mt-2">{experience.price} <span className="text-sm font-normal">per day</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Top picks to explore</h2>
            <Link href="#" className="text-primary flex items-center">
              View all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Example Top Pick</h3>
                <p className="text-sm text-muted-foreground">Description of the top pick</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Another Top Pick</h3>
                <p className="text-sm text-muted-foreground">Description of another top pick</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Third Top Pick</h3>
                <p className="text-sm text-muted-foreground">Description of a third top pick</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Fourth Top Pick</h3>
                <p className="text-sm text-muted-foreground">Description of a fourth top pick</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Fifth Top Pick</h3>
                <p className="text-sm text-muted-foreground">Description of a fifth top pick</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">
            <Link href="#" className="text-sm text-muted-foreground mb-2">Unavailability Form</Link>
            <Link href="#" className="text-sm text-muted-foreground mb-2">My Products</Link>
            <Link href="#" className="text-sm text-muted-foreground mb-2">Post Product</Link>
            <Link href="#" className="text-sm text-muted-foreground mb-2">Legal</Link>
            <Link href="#" className="text-sm text-muted-foreground mb-2">Support</Link>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}