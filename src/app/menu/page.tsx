import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";
import margheritaImage from "@/assets/margherita-pizza.jpg";
import pepperoniImage from "@/assets/pepperoni-pizza.jpg";
import veggieImage from "@/assets/veggie-pizza.jpg";

const Menu = () => {
  
    const pizzas = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil",
    price: 16.99,
    image: "/images/margherita-pizza.jpg", // ✅ relative to /public
    rating: 4.8,
    popular: true
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Premium pepperoni, mozzarella cheese, tomato sauce, oregano",
    price: 18.99,
    image: "/images/pepperoni-pizza.jpg",
    rating: 4.9,
    popular: true
  },
  {
    id: 3,
    name: "Vegetarian Garden",
    description: "Bell peppers, mushrooms, red onions, black olives, fresh tomatoes, mozzarella",
    price: 17.99,
    image: "/images/veggie-pizza.jpg",
    rating: 4.7,
    popular: false
  },
  {
    id: 4,
    name: "Quattro Stagioni",
    description: "Artichokes, mushrooms, ham, olives, mozzarella, tomato sauce",
    price: 21.99,
    image: "/images/margherita-pizza.jpg",
    rating: 4.6,
    popular: false
  },
  {
    id: 5,
    name: "Prosciutto & Arugula",
    description: "Prosciutto di Parma, fresh arugula, cherry tomatoes, parmesan, mozzarella",
    price: 23.99,
    image: "/images/pepperoni-pizza.jpg",
    rating: 4.8,
    popular: true
  },
  {
    id: 6,
    name: "Spicy Diavola",
    description: "Spicy salami, jalapeños, red peppers, mozzarella, spicy tomato sauce",
    price: 19.99,
    image: "/images/veggie-pizza.jpg",
    rating: 4.5,
    popular: false
  }
];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Pizza Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each pizza is carefully crafted with authentic Italian ingredients and baked to perfection in our wood-fired oven.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {pizza.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-md flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pizza.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground">{pizza.name}</CardTitle>
                  <span className="text-2xl font-bold text-primary">${pizza.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {pizza.description}
                </p>
                
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">All Pizzas Available in Multiple Sizes</h3>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-foreground">Small (10")</span>
              <span>Perfect for 1-2 people</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-foreground">Medium (12")</span>
              <span>Great for 2-3 people</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-foreground">Large (14")</span>
              <span>Ideal for 3-4 people</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;