import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:glow-effect"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardHeader>
        <CardTitle className="text-primary">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-secondary font-bold">{product.price} RU</span>
        <span className="text-accent">{product.category}</span>
      </CardFooter>
    </Card>
  );
}