import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Archive, Backpack, Compass } from "lucide-react";

// Temporary mock data - would come from backend in real app
const mockProducts = [
  {
    id: "1",
    name: "SEVA Suit",
    description: "Advanced protective suit providing excellent protection against radiation and anomalies.",
    price: 75000,
    image: "/placeholder.svg",
    category: "equipment" as const
  },
  {
    id: "2",
    name: "Flash Artifact",
    description: "Rare artifact with powerful healing properties.",
    price: 45000,
    image: "/placeholder.svg",
    category: "artifacts" as const
  }
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">STALKER MARKET</h1>
        <div className="h-2 hazard-stripes"></div>
      </div>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Compass className="w-4 h-4" />
            All
          </TabsTrigger>
          <TabsTrigger value="equipment" className="flex items-center gap-2">
            <Backpack className="w-4 h-4" />
            Equipment
          </TabsTrigger>
          <TabsTrigger value="artifacts" className="flex items-center gap-2">
            <Archive className="w-4 h-4" />
            Artifacts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="equipment">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts
              .filter((product) => product.category === "equipment")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="artifacts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts
              .filter((product) => product.category === "artifacts")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;