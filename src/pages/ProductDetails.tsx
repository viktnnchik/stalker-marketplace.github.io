import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProducts } from "./Index";

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-black/50">
        <CardHeader>
          <CardTitle className="text-primary text-3xl">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-cover rounded-lg border-2 border-primary"
          />
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-mono text-secondary">{product.price} RU</span>
              <div className="px-4 py-2 rounded bg-accent/20 border border-accent">
                <span className="text-accent">{product.category}</span>
              </div>
            </div>
            {product.discordUsername && (
              <div className="mt-4 p-4 rounded bg-primary/10 border border-primary">
                <span className="text-primary">Contact: {product.discordUsername}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;