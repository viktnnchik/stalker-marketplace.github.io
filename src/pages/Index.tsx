import { ProductCard } from "@/components/ProductCard";

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Index;