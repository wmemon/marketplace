"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ChevronRight } from "lucide-react";
import Rocket from "@/public/assets/rocket.png";
import Automobile from "@/public/assets/headers/automobile.png";
import Electonics from "@/public/assets/headers/electronics.png";
import Machines from "@/public/assets/headers/machines.png";
import Fashion from "@/public/assets/headers/fashion.png";
import Art from "@/public/assets/headers/art.png";
import RealEstate from "@/public/assets/headers/realestate.png";
import Appliances from "@/public/assets/headers/appliances.png";
import Furniture from "@/public/assets/headers/furniture.png";
import Sports from "@/public/assets/headers/sports.png";
import Musicals from "@/public/assets/headers/musicals.png";
import Emerging from "@/public/assets/headers/emerging.png";
import Books from "@/public/assets/headers/books.png";
import React from "react";

const categories = [
  { name: "Automobiles", icon: Automobile },
  { name: "Electronics", icon: Electonics },
  { name: "Machines", icon: Machines },
  { name: "Fashion", icon: Fashion },
  { name: "Art & Craft", icon: Art },
  { name: "Real Estate", icon: RealEstate },
  { name: "Appliances", icon: Appliances },
  { name: "Furniture", icon: Furniture },
  { name: "Sports", icon: Sports },
  { name: "Musicals", icon: Musicals },
  { name: "Emerging", icon: Emerging },
  { name: "Books", icon: Books },
];

const products = [
  {
    title: "Hero Xpulse 200T",
    location: "Goregaon, Mumbai",
    price: "₹1990",
    image:
      "https://r.saregama.com/resources/images//carvaan/carvaan_premium_share-image.jpg",
  },
  {
    title: "Hero Xpulse 200T",
    location: "Goregaon, Mumbai",
    price: "₹1990",
    image:
      "https://c1.wallpaperflare.com/preview/278/993/113/bike-mountain-bike-wheel-cycling.jpg",
  },
  {
    title: "Hero Xpulse 200T",
    location: "Goregaon, Mumbai",
    price: "₹1990",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/IMG_20200813_182649_C_0_1200x768.jpeg",
  },
  {
    title: "Hero Xpulse 200T",
    location: "Goregaon, Mumbai",
    price: "₹1990",
    image:
      "https://i.pinimg.com/736x/7c/bf/f4/7cbff458f32ff460a989670fd0bdcb93.jpg",
  },
  {
    title: "Hero Xpulse 200T",
    location: "Goregaon, Mumbai",
    price: "₹1990",
    image:
      "https://www.giva.co/cdn/shop/products/ML_queens_necklace_img1.jpg?v=1632552308&width=1445",
  },
];

function ProductCardsContainer({ title }: { title: string }) {
  return (
    <section className="mb-8">
      <div className="flex mb-4 align-bottom">
        <h2 className="text-2xl font-semibold ">{title}</h2>
        <h2 className="text-md ml-auto mr-20 font-semibold hidden sm:flex">
          View All <ChevronRight />{" "}
        </h2>
      </div>
      <div className="flex overflow-x-scroll md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col min-w-[50%]">
            <Card key={index}>
              <CardContent className="p-0 h-60 sm:h-80">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="sm:h-80 h-60 rounded-xl w-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-white rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="p-4">
              <p className="font-semibold text-sm">{product.title}</p>
              <p className="text-sm text-gray-600">{product.location}</p>
              <p className="text-sm font-bold mt-2">
                {product.price}{" "}
                <span className="font-thin text-gray-500">per day</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MarketplaceLayout() {
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <div className="min-h-screen bg-white sm:pl-14 px-2">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-4">
            {isMobile ? (
              <>
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                  {categories.slice(0, 6).map((category, index) => (
                    <CategoryItem key={index} category={category} />
                  ))}
                </div>
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                  {categories.slice(6).map((category, index) => (
                    <CategoryItem key={index + 6} category={category} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex space-x-4 overflow-x-auto">
                {categories.map((category, index) => (
                  <CategoryItem key={index} category={category} />
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="pt-14">
          <ProductCardsContainer title="Top rated experiences" />
        </div>
        <ProductCardsContainer title="Top picks to explore" />
        <ProductCardsContainer title="Popular near me" />

        <section className="mb-8 md:hidden w-full">
          <div className="bg-[#EDEDFC] rounded-xl p-4 flex flex-col items-start w-full">
            <div className="flex flex-row">
              <Button className="bg-white p-0.5 px-1 w-1/6">
                <Image src={Rocket} alt="Rocket" className="h-6 w-7" />
              </Button>
              <div className="flex flex-col">
                <h3 className="font-semibold text-black ml-2">
                  Don&apos;t see what you need?
                </h3>
                <p className="text-sm text-gray-800 mb-4 ml-2">
                  Request a product & we&apos;ll do our best to get it on Renit
                  for you!
                </p>
              </div>
            </div>
            <Button className="w-full bg-[#645AE8] hover:bg-[#5449d6] text-white">
              Unavailability form <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function CategoryItem({ category }: {category: {icon: StaticImageData, name: string}}) {
  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <Image src={category.icon} width={100} height={100} alt={`${category.name} icon`} />
      <span className="text-xs font-semibold text-center mt-2">
        {category.name}
      </span>
    </div>
  )
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}