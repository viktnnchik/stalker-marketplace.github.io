import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useNavigate } from "react-router-dom";
import { Shield, Sword, Star, Wrench } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  
  const getIcon = (category: string) => {
    switch (category) {
      case 'armor':
        return <Shield className="w-6 h-6" />;
      case 'weapons':
        return <Sword className="w-6 h-6" />;
      case 'artifacts':
        return <Star className="w-6 h-6" />;
      case 'sharpening':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Sword className="w-6 h-6" />;
    }
  };

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:glow-effect backdrop-blur-sm bg-black/50"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-primary flex items-center gap-2">
            {getIcon(product.category)}
            {product.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4 border-2 border-primary"
          />
          <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded">
            <span className="text-accent font-mono">{product.category}</span>
          </div>
          {product.sharpening !== undefined && (
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
              <span className="text-accent font-mono">+{product.sharpening}</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground line-clamp-2">{product.description}</p>
        {product.discordUsername && (
          <div className="mt-2 text-sm text-primary-foreground">
            Contact: {product.discordUsername}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-secondary font-bold text-xl font-mono">{product.price} RU</span>
        <div className="px-3 py-1 rounded bg-accent/20 border border-accent">
          <span className="text-accent">{product.category}</span>
        </div>
      </CardFooter>
    </Card>
  );
}