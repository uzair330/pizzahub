"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Award, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pizza-hd.jpg"
            alt="Hero Pizza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-hero/75" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <span className="text-primary text-lg font-medium tracking-wider uppercase">Delicious</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            ITALIAN PIZZA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Authentic wood-fired pizzas made with the finest imported ingredients. 
            Experience the true taste of Italy in every bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/order">
              <Button variant="premium" size="lg" className="px-10 py-6 text-lg font-bold">
                Order Now
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="border-2 border-white/50 text-white hover:bg-white hover:text-foreground px-10 py-6 text-lg font-bold backdrop-blur-sm">
                View Menus
              </Button>
            </Link>
          </div>

          {/* Popular Here Section */}
          <div className="mt-12">
            <p className="text-white/70 text-sm mb-4 tracking-wider">Popular here</p>
            <div className="flex justify-center space-x-4">
              {[
                "/images/pizza-icon-1.jpg",
                "/images/pizza-icon-2.jpg",
                "/images/pizza-icon-3.jpg",
                "/images/pizza-icon-4.jpg"
              ].map((src, index) => (
                <div 
                  key={index}
                  className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white/20 hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`Pizza ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bella Pizza?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about creating the perfect pizza experience with quality ingredients and authentic recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Premium Quality",
                description: "Only the finest ingredients imported directly from Italy"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Fast Delivery",
                description: "Hot, fresh pizza delivered to your door in 30 minutes or less"
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "5-Star Rated",
                description: "Consistently rated as the city's best pizza by our customers"
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Made with Love",
                description: "Every pizza is handcrafted by our experienced Italian chefs"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-soft bg-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Bella Pizza?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied customers who have made us their go-to pizza destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                Place Your Order
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
