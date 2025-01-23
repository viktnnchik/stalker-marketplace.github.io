import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Product } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";

export function AdminProductForm() {
  const { toast } = useToast();
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "equipment"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    toast({
      title: "Product saved",
      description: "The product has been saved successfully.",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-primary">Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price (RU)</Label>
            <Input
              id="price"
              type="number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={product.category}
              onValueChange={(value: Product['category']) => 
                setProduct({ ...product, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weapons">Weapons</SelectItem>
                <SelectItem value="artifacts">Artifacts</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="consumables">Consumables</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">Save Product</Button>
        </form>
      </CardContent>
    </Card>
  );
}