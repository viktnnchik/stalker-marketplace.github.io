import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Product } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Sword, Star, Wrench } from "lucide-react";

export function AdminProductForm() {
  const { toast } = useToast();
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "weapons",
    discordUsername: "",
    sharpening: 0
  });

  const [existingUsernames] = useState<string[]>([]); // In a real app, this would be fetched from a backend

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!product.name || !product.discordUsername || !product.image) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Check for spaces in Discord username
    if (product.discordUsername.includes(" ")) {
      toast({
        title: "Error",
        description: "Discord username cannot contain spaces",
        variant: "destructive"
      });
      return;
    }

    // Check if username already exists
    if (existingUsernames.includes(product.discordUsername)) {
      toast({
        title: "Error",
        description: "This Discord username already has an active listing",
        variant: "destructive"
      });
      return;
    }

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
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
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
            <Label htmlFor="price">Price (RU) *</Label>
            <Input
              id="price"
              type="number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
              required
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL *</Label>
            <Input
              id="image"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discordUsername">Discord Username *</Label>
            <Input
              id="discordUsername"
              value={product.discordUsername}
              onChange={(e) => setProduct({ ...product, discordUsername: e.target.value })}
              required
              placeholder="username#1234"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
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
                <SelectItem value="armor" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Armor
                </SelectItem>
                <SelectItem value="weapons" className="flex items-center gap-2">
                  <Sword className="w-4 h-4" /> Weapons
                </SelectItem>
                <SelectItem value="artifacts" className="flex items-center gap-2">
                  <Star className="w-4 h-4" /> Artifacts
                </SelectItem>
                <SelectItem value="sharpening" className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" /> Sharpening
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {product.category === 'sharpening' && (
            <div className="space-y-2">
              <Label htmlFor="sharpening">Sharpening Level</Label>
              <Input
                id="sharpening"
                type="number"
                value={product.sharpening}
                onChange={(e) => setProduct({ ...product, sharpening: Number(e.target.value) })}
                min="0"
                max="10"
              />
            </div>
          )}

          <Button type="submit" className="w-full">Save Product</Button>
        </form>
      </CardContent>
    </Card>
  );
}