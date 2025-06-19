import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        zoning: "C-2 Commercial District",
        allowedUses: ["Retail", "Restaurant", "Medical Office", "Fitness Center"],
        permits: ["Business License", "Conditional Use Permit (for drive-thru)", "Sign Permit"],
        ideas: ["Boutique coffee shop", "Urgent care clinic", "Pilates studio"]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Land Use AI</h1>
      <p className="text-gray-600 mb-6">Enter a parcel address to discover what you can build.</p>

      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="e.g. 123 Main St, Austin, TX"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button onClick={handleSearch} disabled={!address || loading}>
          {loading ? "Loading..." : "Search"}
        </Button>
      </div>

      {result && (
        <Card className="mt-4">
          <CardContent className="p-4 space-y-4">
            <div>
              <h2 className="font-semibold text-lg">Zoning: {result.zoning}</h2>
            </div>
            <div>
              <h3 className="font-medium">Allowed Uses</h3>
              <ul className="list-disc ml-5 text-sm">
                {result.allowedUses.map((use, i) => <li key={i}>{use}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Required Permits</h3>
              <ul className="list-disc ml-5 text-sm">
                {result.permits.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Business Ideas</h3>
              <ul className="list-disc ml-5 text-sm">
                {result.ideas.map((idea, i) => <li key={i}>{idea}</li>)}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}